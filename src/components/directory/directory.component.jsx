import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhbyy5KWMtp7q0-L4V3m0VKE-7ghKl2W5Kg&usqp=CAU",
      route: "shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://img.thesitebase.net/10196/10196084/products/0x1296@1623229479af074603b5.webp",
      route: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://img.thesitebase.net/10196/10196084/products/0x1512@1620308678e78388edbe.webp",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://afroculture.net/wp-content/uploads/2016/11/Habesha-Kemis-tenue-traditionnelle-%C3%A9thiopienne-et-%C3%A9rythr%C3%A9enne-1.jpg",
      route: "shop/womens",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://i.pinimg.com/736x/dc/63/78/dc6378cfa0c3f230e56a611df7aa3819.jpg",
      route: "shop/mens",
    },
  ];

  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

// import CategoryItem from "../category-item/category-item.component";

// const Directory = ({ categories }) => {
//   return (
//     <div className="categories-container">
//       {categories.map((category) => (
//         <CategoryItem key={category.id} category={category} />
//       ))}
//     </div>
//   );
// };

// export default Directory;
