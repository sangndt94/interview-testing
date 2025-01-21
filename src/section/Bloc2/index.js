import React, { useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../context";
import FormComponent from "./Form/Form";
import Title from "../../components/Title";

export default function Bloc2() {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage, changeDataLanguage, dataLanguage } =
    useContext(AppContext);
  // Sự kiện cho lịch
  const events = [
    { title: t("Libre"), date: "2025-01-28", className: "event-libre" },
    { title: t("Occupé"), date: "2025-01-29", className: "event-occupé" },
    { title: t("Libre"), date: "2025-02-04", className: "event-libre" },
  ];
  return (
    <div className="xl:px-56 lg:px-2">
      <Title
        title={dataLanguage?.[0]?.bloc_2?.title}
        subtitle={dataLanguage?.[0]?.bloc_2?.subtitle}
      />
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          initialDate="2025-01-28"
          events={events}
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          buttonText={{
            prev: "❮",
            next: "❯",
          }}
          titleFormat={{
            year: "numeric",
            month: "long",
          }}
          navLinks={true}
          editable={true}
          selectable={true}
          dayMaxEvents={true}
          contentHeight="auto"
        />
      </div>

      {/* Form */}
      <div>
        <FormComponent />
      </div>
    </div>
  );
}
