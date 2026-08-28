import {
  Beef,
  Box,
  Cake,
  Fish,
  Salad,
  Soup,
  UtensilsCrossed,
  Wine,
  type LucideIcon,
} from "lucide-react";

const BLOB_BASE = "https://i1ehs9v03p6bk6vf.public.blob.vercel-storage.com/models";

export type Category = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export type Model3D = {
  glbUrl: string;
  usdzUrl?: string;
  posterUrl: string;
};

export type MenuItem = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  tags?: ("vegan" | "ljuto" | "preporuka")[];
  model3d?: Model3D;
};

export const categories: Category[] = [
  { id: "predjela", label: "Predjela", icon: Salad },
  { id: "supe", label: "Supe i čorbe", icon: Soup },
  { id: "rostilj", label: "Roštilj", icon: Beef },
  { id: "riba", label: "Riba", icon: Fish },
  { id: "testenine", label: "Testenine", icon: UtensilsCrossed },
  { id: "deserti", label: "Deserti", icon: Cake },
  { id: "pica", label: "Pića", icon: Wine },
  { id: "test", label: "Test (demo)", icon: Box },
];

export const items: MenuItem[] = [
  {
    id: "prsuta-sir",
    categoryId: "predjela",
    name: "Pršuta i sir plata",
    description: "Domaća pršuta, kačkavalj, masline i pečeni paradajz.",
    price: 890,
  },
  {
    id: "punjene-pecurke",
    categoryId: "predjela",
    name: "Punjene pečurke",
    description: "Šampinjoni punjeni sirom i slaninom, zapečeni.",
    price: 650,
    tags: ["preporuka"],
  },
  {
    id: "bruskete",
    categoryId: "predjela",
    name: "Bruskete sa paradajzom",
    description: "Pečeni hleb, sveži paradajz, bosiljak, maslinovo ulje.",
    price: 490,
    tags: ["vegan"],
  },
  {
    id: "riblja-corba",
    categoryId: "supe",
    name: "Riblja čorba",
    description: "Domaća, sa svežim povrćem i paprikom.",
    price: 590,
    tags: ["preporuka"],
  },
  {
    id: "pileca-supa",
    categoryId: "supe",
    name: "Pileća supa",
    description: "Kuvana na kostima, sa domaćim rezancima.",
    price: 450,
  },
  {
    id: "gulas",
    categoryId: "supe",
    name: "Gulaš čorba",
    description: "Gusta čorba od junećeg mesa i paprike.",
    price: 550,
    tags: ["ljuto"],
  },
  {
    id: "mesano-meso",
    categoryId: "rostilj",
    name: "Mešano meso za dvoje",
    description: "Ćevapi, pljeskavica, vešalica i piletina, uz prilog.",
    price: 2490,
    tags: ["preporuka"],
  },
  {
    id: "cevapi",
    categoryId: "rostilj",
    name: "Ćevapi (10 kom)",
    description: "Domaći, uz kajmak, luk i lepinju.",
    price: 790,
  },
  {
    id: "pileci-raznjici",
    categoryId: "rostilj",
    name: "Pileći ražnjići",
    description: "Marinirano pileće meso, paprika i luk na žaru.",
    price: 890,
  },
  {
    id: "rebra-bbq",
    categoryId: "rostilj",
    name: "Rebra u BBQ sosu",
    description: "Sporo pečena rebra, domaći BBQ premaz.",
    price: 1290,
    tags: ["ljuto"],
  },
  {
    id: "grilovana-orada",
    categoryId: "riba",
    name: "Grilovana orada",
    description: "Cela riba na žaru, blitva i krompir.",
    price: 1590,
    tags: ["preporuka"],
  },
  {
    id: "lignje",
    categoryId: "riba",
    name: "Lignje na žaru",
    description: "Sveže lignje, limun, blitva.",
    price: 1390,
  },
  {
    id: "losos",
    categoryId: "riba",
    name: "Losos u sosu od limuna",
    description: "Filet lososa, povrće na pari.",
    price: 1690,
  },
  {
    id: "rizoto-tartuf",
    categoryId: "testenine",
    name: "Rižoto sa tartufima",
    description: "Kremasti rižoto, crni tartufi, parmezan.",
    price: 1190,
    tags: ["vegan"],
  },
  {
    id: "tagliatelle",
    categoryId: "testenine",
    name: "Tagliatelle sa gljivama",
    description: "Domaće testo, šumske gljive, pavlaka.",
    price: 990,
  },
  {
    id: "penne-arabiata",
    categoryId: "testenine",
    name: "Penne Arabiata",
    description: "Ljuti paradajz sos, beli luk, bosiljak.",
    price: 850,
    tags: ["ljuto", "vegan"],
  },
  {
    id: "cokoladna-torta",
    categoryId: "deserti",
    name: "Čokoladna torta",
    description: "Tamna čokolada, malina, sladoled od vanile.",
    price: 590,
    tags: ["preporuka"],
  },
  {
    id: "tiramisu",
    categoryId: "deserti",
    name: "Tiramisu",
    description: "Domaći, sa espresom i mascarpone kremom.",
    price: 550,
  },
  {
    id: "palacinke",
    categoryId: "deserti",
    name: "Palačinke sa orasima",
    description: "Tri palačinke, orah, čokoladni preliv.",
    price: 490,
  },
  {
    id: "domaca-limunada",
    categoryId: "pica",
    name: "Domaća limunada",
    description: "Sveže ceđena, nana, med.",
    price: 350,
    tags: ["vegan"],
  },
  {
    id: "kupus-vino",
    categoryId: "pica",
    name: "Kućno crno vino",
    description: "Čaša 0.2l, domaća berba.",
    price: 390,
  },
  {
    id: "craft-pivo",
    categoryId: "pica",
    name: "Craft pivo 0.33l",
    description: "Izbor lokalnih pivara, rotira sezonski.",
    price: 420,
  },
  {
    id: "test-3d-demo",
    categoryId: "test",
    name: "Test 3D prikaz (demo)",
    description:
      "Placeholder model za proveru AR/3D flow-a end-to-end — zameniti pravim skenom jela kad photogrammetry modeli budu gotovi.",
    price: 0,
    model3d: {
      glbUrl: `${BLOB_BASE}/test-3d-demo/model.glb`,
      usdzUrl: `${BLOB_BASE}/test-3d-demo/model.usdz`,
      posterUrl: "/models/test-3d-demo/poster.svg",
    },
  },
  {
    id: "procija1",
    categoryId: "test",
    name: "Porcija 1 (tvoj sken)",
    description:
      "Ažurirani photogrammetry sken jela, sada sa USDZ fajlom — Quick Look na iPhone-u, Scene Viewer/WebXR na Android-u i 3D rotacija svuda.",
    price: 0,
    model3d: {
      glbUrl: `${BLOB_BASE}/procija1/model.glb`,
      usdzUrl: `${BLOB_BASE}/procija1/model.usdz`,
      posterUrl: "/models/procija1/poster.svg",
    },
  },
  {
    id: "fast-food",
    categoryId: "test",
    name: "Fast food (test, 43MB)",
    description:
      "Veći test model bez USDZ — namerno velik fajl da se vidi kako se ponaša učitavanje pre nego što odlučimo koliko treba da se kompresuju pravi skenovi.",
    price: 0,
    model3d: {
      glbUrl: `${BLOB_BASE}/fast-food/model.glb`,
      posterUrl: "/models/fast-food/poster.svg",
    },
  },
];
