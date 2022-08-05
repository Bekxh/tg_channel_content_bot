export interface MessageModel {
    channelUsername: string;
    message: string;
    priority: 'low' | 'medium' | 'high';
}