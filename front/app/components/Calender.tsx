'use client'

import FullCalendar from '@fullcalendar/react';
// FullCalendarで月表示を可能にするプラグイン。
import dayGridPlugin from '@fullcalendar/daygrid';
// FullCalendarで日付や時間が選択できるようになるプラグイン。
import interactionPlugin from "@fullcalendar/interaction";

//インポートはプラグインを後にするようにしてください。
//イベントはオブジェクトの配列をPropsとして渡します
const eventExample = [
  //オブジェクトの中身はこんな感じ
　//satrtとendの日付で日を跨いだ予定を表示できる
　　//背景のカラーもこの中で指定できる
  {
    title: "温泉旅行",
    start: new Date(),
    end: new Date().setDate(new Date().getDate() + 5),
    description: "友達と温泉旅行",
    backgroundColor: "green",
    borderColor: "green"
  },
  {
    title: "期末テスト",
    start: new Date().setDate(new Date().getDate() + 5),
    description: "2年最後の期末テスト",
    backgroundColor: "blue",
    borderColor: "blue"
  }
];

<FullCalendar
plugins={[dayGridPlugin]}
initialView="dayGridMonth"
events={eventExample}
/>

