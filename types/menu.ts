// al-mustafa-site/types/menu.ts

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface MenuCategory {
  category: string;
  slug: string;
  items: MenuItem[];
}