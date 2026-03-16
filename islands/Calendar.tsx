/** biome-ignore-all lint/correctness/useHookAtTopLevel: Islands! */
import "temporal-polyfill/global";

import {
  createViewMonthAgenda,
  createViewMonthGrid,
} from "@schedule-x/calendar";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/preact";
import { IS_BROWSER } from "fresh/runtime";

export default function Calendar() {
  if (!IS_BROWSER) return <></>;

  // deno-lint-ignore react-rules-of-hooks
  const calendar = useCalendarApp({
    views: [createViewMonthAgenda(), createViewMonthGrid()],
    events: [
      {
        id: "1",
        title: "Community Clean-Up Day",
        start: Temporal.PlainDate.from("2026-03-21"),
        end: Temporal.PlainDate.from("2026-03-21"),
      },
      {
        id: "2",
        title: "Town Hall Meeting",
        start: Temporal.PlainDate.from("2026-03-18 18:00"),
        end: Temporal.PlainDate.from("2026-03-18 20:00"),
      },
      {
        id: "3",
        title: "Spring Festival",
        start: Temporal.PlainDate.from("2026-03-21"),
        end: Temporal.PlainDate.from("2026-03-22"),
      },
      {
        id: "4",
        title: "Youth Soccer Registration",
        start: Temporal.PlainDate.from("2026-03-25 09:00"),
        end: Temporal.PlainDate.from("2026-03-25 12:00"),
      },
      {
        id: "5",
        title: "Library Book Sale",
        start: Temporal.PlainDate.from("2026-03-28"),
        end: Temporal.PlainDate.from("2026-03-29"),
      },
      {
        id: "6",
        title: "Farmers Market Opening",
        start: Temporal.PlainDate.from("2026-04-04 08:00"),
        end: Temporal.PlainDate.from("2026-04-04 13:00"),
      },
    ],
  });

  return (
    <div class="h-200 max-h-[90vh] w-full max-w-4xl">
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}
