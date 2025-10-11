import { create } from 'zustand';
import { samplePhotoArray } from '../assets/sample-image-data/_index';
import { AppState } from '../types';

export const useAppStore = create<AppState>((set) => ({
  openLeftSidebar: true,
  openRightSidebar: false,
  selectedPhotoIndex: null,
  photosArray: samplePhotoArray,

  toggleLeftSidebar: () =>
    set((state) => ({
      openLeftSidebar: !state.openLeftSidebar
    })),

  toggleRightSidebar: () =>
    set((state) => ({
      openRightSidebar: !state.openRightSidebar
    })),

  setPhotoArrayIndex: (index, isMobile) =>
    set((state) => ({
      openRightSidebar: state.selectedPhotoIndex === null && !isMobile ? true : state.openRightSidebar,
      selectedPhotoIndex: index,
    })),

  addPhoto: (photo) =>
    set((state) => ({
      photosArray: [photo, ...state.photosArray]
    })),

  reset: () =>
    set(() => ({
      openRightSidebar: false,
      selectedPhotoIndex: null
    })),
}));
