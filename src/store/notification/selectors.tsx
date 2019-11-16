import { AppStore } from "..";

export function getNotification(state: AppStore) {
    return state.notification;
}