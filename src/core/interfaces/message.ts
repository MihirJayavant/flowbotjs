export enum MessageType {
  Text = 'text',
  Images = 'images',
  Videos = 'videos',
  Links = 'links',
  MultiChoice = 'multichoice',
  SingleChoice = 'singlechoice'
}

export interface IMessage {
  type: MessageType
}

export interface ITextMessage extends IMessage {
  message: string
  type: MessageType.Text
}
export interface IImageMessage extends IMessage {
  message: string
  urls: string[]
  type: MessageType.Images
}
export interface IVideoMessage extends IMessage {
  message: string
  urls: string[]
  type: MessageType.Videos
}
export interface ILinkMessage extends IMessage {
  message: string
  urls: string[]
  type: MessageType.Links
}
export interface IMultiChoiceMessage extends IMessage {
  message: string
  choices: string[]
  type: MessageType.MultiChoice
}
export interface ISingleChoiceMessage extends IMessage {
  message: string
  choices: string[]
  type: MessageType.SingleChoice
}
