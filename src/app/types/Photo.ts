export interface Photo {
  id: number;
  postDate: string;
  description: string
  url: string
  allowComments: string;
  likes: number;
  comments: number;
  userId: number;
}
