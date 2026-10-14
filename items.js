// Shared menu data for menu.html (print / desktop) and menu-mobile.html (phone).
// Edit items here — both pages pick up the change.
// ---------------------------------------------------------------------
// EDIT ME: one entry per item, in the order they appear; "group" picks the section, "badge" is optional.
// "id" must match the ID column of the Menu tab in the orders Google Sheet.
// Only items with a real product photo belong here.
// ---------------------------------------------------------------------
const ITEMS = [
  {
    id:"basque",
    name:"Basque Cheesecake",
    nameVn:"Bánh Phô Mai Cháy",
    price:55000,
    unit:"piece",
    weight:"110g",
    img:"image/cheesecake-slice-cutout.png",
    group:"bakes", badge:"Best seller",
    desc:"Cream cheese, whipping cream and cultured yogurt, caramelised until deeply burnt on top.",
  },
  {
    id:"banana",
    name:"Banana Oat Choco Chip Bread",
    nameVn:"Bánh Chuối Yến Mạch Choco Chip",
    orderHint:"Muốn đổi choco chip sang hạt? Ghi ngay bên dưới khi chọn bánh.",
    notePlaceholder:"Ghi chú: vd đổi choco chip sang hạt",
    price:25000,
    unit:"piece",
    weight:"150g",
    img:"image/Banana_oat_bread-removebg-preview-cropped.png",
    group:"bakes",
    desc:"Ripe banana, rolled oats and dark chocolate chips, baked into a moist tea loaf. Nuts instead of chips on request.",
  },
  {
    id:"brownie",
    name:"Fudge Brownie",
    nameVn:"Bánh Brownie",
    price:45000,
    unit:"pack of 3",
    weight:"~150g",
    img:"image/brownie-removebg-preview-cropped.png",
    group:"bakes",
    desc:"Puratos dark chocolate and cocoa powder, dense and fudgy with a crackled top.",
  },
  {
    id:"smore",
    name:"S'more",
    nameVn:"Bánh Quy S'more",
    price:40000,
    unit:"piece",
    weight:"~55g",
    img:"image/cookie-smore-removebg-preview-cropped.png",
    group:"cookies",
    desc:"Toasted marshmallow and melted chocolate over a brown-butter cookie base.",
  },
  {
    id:"double-choco",
    name:"Double Choco",
    nameVn:"Bánh Quy Double Choco",
    price:40000,
    unit:"piece",
    weight:"~55g",
    img:"image/cookie-double-choco-removebg-preview-cropped.png",
    group:"cookies",
    desc:"Milk and dark Puratos chocolate folded into a rich cocoa dough.",
  },
  {
    id:"choc-chip",
    name:"Chocolate Chip",
    nameVn:"Bánh Quy Chocolate Chip",
    price:40000,
    unit:"piece",
    weight:"~55g",
    img:"image/cookie-choc-chips-removebg-preview.png",
    group:"cookies",
    desc:"Crisp edges, a soft chew, and pools of melted chocolate.",
  },
];

// Featured item at the top of the menu (both layouts).
const FEATURED = {
  id:"mini-bag",
  name:"Mini Cookie Bag",
  nameVn:"Túi Bánh Quy Mini · mix vị",
  price:55000,
  meta:"10 pieces · ~100g",
  pitch:"Every cookie flavour in one bag",
  img:"image/cookie-bag-illustration.png",
  desc:"Ten bite-sized cookies in a mix of our flavours — made for snacking and sharing.",
};

function formatVnd(n){ return n.toLocaleString('en-US').replace(/,/g, '.') + '₫'; }
