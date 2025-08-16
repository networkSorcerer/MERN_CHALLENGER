import React, { useEffect, useState } from "react";
import { getDaysInMonth, subMonths, addMonths } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { getLurnedDay } from "../../features/class/classSlice";

const CALENDAR_LENGTH = 42; // 6주 * 7일
const DEFAULT_TRASH_VALUE = 0;
const DAY_LIST = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [select, setSelect] = useState([]);
  const dispatch = useDispatch();
  const { lurnday } = useSelector((state) => state.class) || { lurnday: [] };
  const totalMonthDays = getDaysInMonth(currentDate);

  useEffect(() => {
    dispatch(getLurnedDay());
  }, [dispatch]);

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const prevDayList = Array.from({ length: firstDayOfMonth }).map(
    () => DEFAULT_TRASH_VALUE
  );
  const currentDayList = Array.from({ length: totalMonthDays }).map(
    (_, i) => i + 1
  );
  const nextDayList = Array.from({
    length: CALENDAR_LENGTH - prevDayList.length - currentDayList.length,
  }).map(() => DEFAULT_TRASH_VALUE);

  const allDays = [...prevDayList, ...currentDayList, ...nextDayList];

  // 숫자 day를 YYYY-MM-DD 문자열로 변환
  const formatDay = (day) => {
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const dayStr = String(day).padStart(2, "0");
    return `${currentDate.getFullYear()}-${month}-${dayStr}`;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "1rem",
      }}
    >
      {/* 상단 Navbar */}
      <nav
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "1rem 1.5rem",
          boxShadow:
            "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.125rem" }}>내 달력</div>
      </nav>

      {/* 월 이동 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          maxWidth: "28rem",
          margin: "0 auto",
        }}
      >
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#e5e7eb",
            borderRadius: "0.5rem",
            border: "none",
          }}
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
        >
          이전달
        </button>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.125rem",
            textAlign: "center",
            color: "#0c0101ff",
          }}
        >
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </div>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#e5e7eb",
            borderRadius: "0.5rem",
            border: "none",
          }}
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
        >
          다음달
        </button>
      </div>

      {/* 요일 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
          maxWidth: "28rem",
          margin: "0 auto",
          textAlign: "center",
          fontWeight: "600",
          marginBottom: "0.5rem",
          color: "#150101ff",
        }}
      >
        {DAY_LIST.map((day) => (
          <div
            key={day}
            style={{ padding: "0.5rem", borderBottom: "1px solid #f6ebebff" }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* 날짜 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
          maxWidth: "28rem",
          margin: "0 auto",
          gap: "0.25rem",
        }}
      >
        {allDays.map((day, idx) => {
          const dayStr = formatDay(day);

          return (
            <button
              key={idx}
              onClick={() => {
                if (day === 0) return;
                setSelect((prev) =>
                  prev.includes(day)
                    ? prev.filter((d) => d !== day)
                    : [...prev, day]
                );
              }}
              style={{
                padding: "0.5rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                textAlign: "center",
                backgroundColor:
                  day === 0
                    ? "transparent"
                    : select.includes(day)
                    ? "#2563eb"
                    : (lurnday || []).includes(dayStr)
                    ? "#0b7849ff"
                    : "white",
                color: select.includes(day) ? "white" : "black",
                visibility: day === 0 ? "hidden" : "visible",
                cursor: "pointer",
              }}
            >
              {day !== 0 ? day : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
