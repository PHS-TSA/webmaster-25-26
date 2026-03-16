/** biome-ignore-all lint/correctness/useHookAtTopLevel: Islands! */
import "@schedule-x/theme-default/dist/index.css";
import "temporal-polyfill/global";

import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/preact";
import { IS_BROWSER } from "fresh/runtime";

export default function Calendar() {
  if (!IS_BROWSER) return <></>;

  // deno-lint-ignore react-rules-of-hooks
  const calendar = useCalendarApp({
    views: [
      //   createViewDay(),
      createViewMonthAgenda(),
      //   createViewMonthGrid(),
      //   createViewWeek(),
    ],
    events: [
      {
        id: "1",
        title: "Event 1",
        start: Temporal.PlainDate.from("2026-02-16"),
        end: Temporal.PlainDate.from("2026-02-16"),
      },
    ],
  });

  return <ScheduleXCalendar calendarApp={calendar} />;
}
