import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";
import Calendar from "../islands/Calendar.tsx";

export default define.page(() => {
  return (
    <div class="mx-auto min-h-screen px-4 py-8">
      <Head>
        <title>Upcoming Events | Bridgeton Resources</title>
      </Head>
      <div class="mx-auto flex max-w-5xl flex-col items-center justify-center">
        <h1 class="font-bold text-4xl">Upcoming Events</h1>

        <div>
          <Calendar></Calendar>
        </div>

        <table class="table table-fixed">
          <thead>
            <td>Sunday</td>
            <td>Monday</td>
            <td>Tuesday</td>
            <td>Wednesday</td>
            <td>Thursday</td>
            <td>Friday</td>
            <td>Saturday</td>
          </thead>
          <tbody>
            <tr class="*:size-full *:nth-[6]:*:bg-accent">
              <td>
                <ADate date="1" goingsOns={"Take over the World"}></ADate>
              </td>
              <td>
                <ADate date="2" goingsOns={"Reaction or Preaction?"}></ADate>
              </td>
              <td>
                <ADate date="3" goingsOns={"Abstractions"}></ADate>
              </td>
              <td>
                <ADate date="4" goingsOns={"OOP-s"}></ADate>
              </td>
              <td>
                <ADate
                  date="5"
                  goingsOns={"Components or compartments?"}
                ></ADate>
              </td>
              <td>
                <ADate date="6" goingsOns={undefined}></ADate>
              </td>
              <td>
                <ADate date="7" goingsOns={"undefined"}></ADate>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
});

interface DateProps {
  readonly date: string;
  readonly goingsOns: string | undefined;
}

function ADate({ date, goingsOns }: DateProps) {
  return (
    <div class="card relative h-full w-full shadow-md">
      <h3 class="card-title absolute justify-center pt-1 pl-1">{date}</h3>
      <div class="card-body">
        {goingsOns !== undefined ? (
          <div class="card-body grow p-4 pt-0">
            <p>{goingsOns}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
