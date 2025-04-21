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
    imageUrl: "/placeholder.svg",
    description: "Панорамный вид на Севастопольскую бухту с высоты птичьего полета, изображающий многочисленные корабли Черноморского флота."
  },
  {
    id: 2,
    title: "Графская пристань в Севастополе",
    year: "1842",
    imageUrl: "/placeholder.svg",
    description: "Изображение знаменитой Графской пристани - главных морских ворот Севастополя с колоннадой в дорическом стиле."
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
