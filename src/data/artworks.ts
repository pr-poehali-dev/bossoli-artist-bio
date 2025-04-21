export interface Artwork {
  id: number;
  title: string;
  year: string;
  imageUrl: string;
  description: string;
}

export const sevastopolArtworks: Artwork[] = [
  {
    id: 1,
    title: "Вид на Севастопольскую бухту",
    year: "1840-1842",
    imageUrl: "https://cdn.poehali.dev/files/f6642e4f-2dd1-4eb9-84c9-8d12fc8080bb.jpg",
    description: "Панорамный вид на Севастопольскую бухту с высоты птичьего полета, изображающий многочисленные корабли Черноморского флота."
  },
  {
    id: 2,
    title: "Херсонес Таврический",
    year: "1842",
    imageUrl: "https://cdn.poehali.dev/files/0cf072c1-ff34-4d41-bb59-77a35a435b0c.jpg",
    description: "Изображение древних руин Херсонеса Таврического на закате, с видом на бухту и окрестности Севастополя."
  },
  {
    id: 3,
    title: "Панорама Севастополя",
    year: "1842",
    imageUrl: "https://cdn.poehali.dev/files/000f18bd-9878-4b6e-8ef4-fb65abdbb2ab.jpg",
    description: "Общий вид на город и бухту, демонстрирующий архитектуру и топографию Севастополя в середине XIX века."
  },
  {
    id: 4,
    title: "Вид на Артиллерийскую бухту",
    year: "1840-1842",
    imageUrl: "/placeholder.svg",
    description: "Детальное изображение одной из малых бухт Севастополя с военными укреплениями и кораблями."
  },
  {
    id: 5,
    title: "Севастополь с моря",
    year: "1842",
    imageUrl: "/placeholder.svg",
    description: "Вид на город со стороны моря, отображающий береговые укрепления и особенности рельефа."
  },
  {
    id: 6,
    title: "Улицы Севастополя",
    year: "1842",
    imageUrl: "/placeholder.svg",
    description: "Городской пейзаж, изображающий повседневную жизнь и архитектуру улиц Севастополя."
  }
];
