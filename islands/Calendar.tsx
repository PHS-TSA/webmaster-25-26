/** biome-ignore-all lint/correctness/useHookAtTopLevel: Islands! */
import "temporal-polyfill/global";

import {
  createViewMonthAgenda,
  createViewMonthGrid,
} from "@schedule-x/calendar";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/preact";
import { IS_BROWSER } from "fresh/runtime";

export default function Calendar() {
  if (!IS_BROWSER) return null;

  // deno-lint-ignore react-rules-of-hooks
  const calendar = useCalendarApp({
    views: [createViewMonthAgenda(), createViewMonthGrid()],
    events: [
      {
        id: "1",
        title: "Community Clean-Up Day",
        start: Temporal.PlainDate.from("2026-04-12"),
        end: Temporal.PlainDate.from("2026-04-12"),
      },
      {
        id: "2",
        title: "Town Hall Resource Night",
        start: Temporal.ZonedDateTime.from(
          "2026-04-18T18:00-05:00[America/Chicago]",
        ),
        end: Temporal.ZonedDateTime.from(
          "2026-04-18T20:00-05:00[America/Chicago]",
        ),
      },
      {
        id: "3",
        title: "Library Book Sale and Sign-Up Drive",
        start: Temporal.ZonedDateTime.from(
          "2026-04-25T10:00-05:00[America/Chicago]",
        ),
        end: Temporal.ZonedDateTime.from(
          "2026-04-25T14:00-05:00[America/Chicago]",
        ),
      },
      {
        id: "4",
        title: "Neighborhood Safety Workshop",
        start: Temporal.ZonedDateTime.from(
          "2026-05-02T11:00-05:00[America/Chicago]",
        ),
        end: Temporal.ZonedDateTime.from(
          "2026-05-02T13:00-05:00[America/Chicago]",
        ),
      },
    ],
  });

  return (
    <div class="h-full w-full max-w-4xl">
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}
