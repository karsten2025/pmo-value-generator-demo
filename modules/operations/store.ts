// modules/operations/store.ts
import { create } from "zustand";

interface AppState {
  selectedOutcomeIds: string[]; // Die Liste der ausgewählten "Schmerzen"
  toggleOutcome: (id: string) => void; // Funktion zum An/Abwählen
  clearSelection: () => void; // Alles zurücksetzen
}

export const useStore = create<AppState>((set) => ({
  selectedOutcomeIds: [], // Startet leer

  toggleOutcome: (id) =>
    set((state) => {
      const isSelected = state.selectedOutcomeIds.includes(id);
      // Wenn schon da -> entfernen. Wenn nicht da -> hinzufügen.
      return {
        selectedOutcomeIds: isSelected
          ? state.selectedOutcomeIds.filter((i) => i !== id)
          : [...state.selectedOutcomeIds, id],
      };
    }),

  clearSelection: () => set({ selectedOutcomeIds: [] }),
}));
