export const initialInterviewState = {
  dates: [],   // array of interview dates
  totalCapacity: 0,
};

export function interviewReducer(state, action) {
  switch (action.type) {

    case "ADD_DATE": {
      const newDate = {
        id: Date.now(),
        date: action.payload,
        slots: [],
        totalCapacity: 0,
      };

      return {
        ...state,
        dates: [...state.dates, newDate],
      };
    }

    case "ADD_SLOT": {
      const { dateId } = action;
      return {
        ...state,
        dates: state.dates.map((d) =>
          d.id === dateId
            ? {
                ...d,
                slots: [
                  ...d.slots,
                  {
                    id: Date.now(),
                    time: "",
                    capacity: 0,
                    interviewer: "",
                    instructions: "",
                  },
                ],
              }
            : d
        ),
      };
    }

    case "UPDATE_SLOT": {
      const { dateId, slotId, field, value } = action;

      const updatedDates = state.dates.map((d) => {
        if (d.id !== dateId) return d;

        const updatedSlots = d.slots.map((s) =>
          s.id === slotId ? { ...s, [field]: value } : s
        );

        const newTotalCapacity = updatedSlots.reduce(
          (sum, s) => sum + Number(s.capacity || 0),
          0
        );

        return {
          ...d,
          slots: updatedSlots,
          totalCapacity: newTotalCapacity,
        };
      });

      const totalCapacityAllDates = updatedDates.reduce(
        (sum, d) => sum + d.totalCapacity,
        0
      );

      return {
        ...state,
        dates: updatedDates,
        totalCapacity: totalCapacityAllDates,
      };
    }

    case "REMOVE_SLOT": {
      const { dateId, slotId } = action;

      const updatedDates = state.dates.map((d) => {
        if (d.id !== dateId) return d;

        const updatedSlots = d.slots.filter((s) => s.id !== slotId);

        const newTotalCapacity = updatedSlots.reduce(
          (sum, s) => sum + Number(s.capacity || 0),
          0
        );

        return {
          ...d,
          slots: updatedSlots,
          totalCapacity: newTotalCapacity,
        };
      });

      const totalCapacityAllDates = updatedDates.reduce(
        (sum, d) => sum + d.totalCapacity,
        0
      );

      return {
        ...state,
        dates: updatedDates,
        totalCapacity: totalCapacityAllDates,
      };
    }

    default:
      return state;
  }
}
