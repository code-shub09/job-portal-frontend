import React, { useState } from "react";
import InterviewDateManager from "../../components/Employer/InterviewDateManager";
import SlotSummaryPreview from "../../components/Employer/SlotSummaryPreview";
import { DateCard } from "../../components/Employer/DateCard";
import FinalInterviewScheduleReview from "../../components/Employer/FinalInterviewScheduleReview";

const OnetooneSlotBook = ({ TotalShortlisted = 100 }) => {
  const [dates, setDates] = useState([]);
  const [IsReviewOpen, setIsReviewOpen] = useState(false);
  const [TotalSlotCapicity, setTotalSlotCapicity] = useState(0);
  return (
    <div className="w-full bg-gray-200 min-h-screen pt-8">
      <div className="flex justify-between w-[70%] m-auto">
        <div className="w-[70%]">
          <InterviewDateManager
            setTotalSlotCapicity={setTotalSlotCapicity}
            dates={dates}
            setDates={setDates}
          ></InterviewDateManager>

          {/* <DateCard></DateCard> */}
        </div>

        <div className="w-[25%]">
          <SlotSummaryPreview
            setIsReviewOpen={setIsReviewOpen}
            TotalShortlisted={TotalShortlisted}
            TotalSlotCapicity={TotalSlotCapicity}
            dateX={dates}
          ></SlotSummaryPreview>
        </div>
        {IsReviewOpen && (
          <FinalInterviewScheduleReview
            shortlistedCount={TotalShortlisted}
            totalCapacity={TotalSlotCapicity}
            setIsReviewOpen={setIsReviewOpen}
            totalDates={dates.length}
            dateX={dates}
          ></FinalInterviewScheduleReview>
        )}
      </div>
    </div>
  );
};

export default OnetooneSlotBook;
