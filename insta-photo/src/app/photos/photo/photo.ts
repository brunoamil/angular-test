
//é um padrão especifico do que voce retorna em photo, não pode mudar.
export interface Photo {
    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComments: boolean;
    likes: number;
    comments: number;
    userId: number;
}