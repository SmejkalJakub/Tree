/**
 * \brief UkĂĄzkovĂ˝ skript pro prvnĂ­ projekt pĹedmÄtu WAP
 */

/// VyuĹžijeme knihovnu, kterĂĄ je pĹedmÄtem zadĂĄnĂ­ projektu
import { Tree } from "./tree.mjs";

/// TestovacĂ­ data, samozĹejmÄ jde jen o pĹĂ­klad a pro finĂĄlnĂ­
/// hodnocenĂ­ lze oÄekĂĄvat vyuĹžitĂ­ jinĂ˝ch dat
let input = [5,7,2131345646,9,4,13,12415486];

/// Knihovna musĂ­ poskytovat konstruktor Tree()
/// Tento konstruktor oÄekĂĄvĂĄ jedinĂ˝ parametr - ĹadĂ­cĂ­ fukci, kterĂĄ
/// vyhodnocuje, do kterĂŠho podstromu pĹidat novou hodnotu
let t = new Tree((a,b) => a < b);
/// Objekty vytvoĹenĂŠ konstruktorem Tree() musĂ­ implementovat metodu
/// insertValue(). Ta oÄekĂĄvĂĄ jedinĂ˝ parametr - novÄ pĹidĂĄvanou hodnotu.
input.forEach(i => t.insertValue(i));

/// UkĂĄzka pouĹžitĂ­ knihovny:
/// IterĂĄtorĹŻ  vrĂĄcenĂ˝ch generĂĄtory preorder(), inorder() a postorder() je
/// moĹžnĂŠ vytvoĹit vĂ­ce, vzĂĄjemnÄ budou na sobÄ nezĂĄvislĂŠ. PĹedpoklĂĄdejte,
/// Ĺže v prĹŻbÄhu iterace nebudou vklĂĄdĂĄny novĂŠ prvky.
console.log("Mix 2 iterĂĄtorĹŻ")
let pre1 = t.preorder()
console.log(pre1.next().value);
console.log(pre1.next().value);
let pre2 = t.preorder()
console.log(pre2.next().value);
console.log(pre1.next().value);
console.log(pre2.next().value);
console.log(pre2.next().value);
console.log(pre1.next().value);

/// UkĂĄzka vyuĹžitĂ­ iterĂĄtoru zĂ­skanĂŠho z generĂĄtoru preorder()
console.log("preorder")
for (let n of t.preorder()) {
	console.log(n);
}
/// UkĂĄzka vyuĹžitĂ­ iterĂĄtoru zĂ­skanĂŠho z generĂĄtoru inorder()
console.log("inorder")
for (let n of t.inorder()) {
	console.log(n);
}
/// UkĂĄzka vyuĹžitĂ­ iterĂĄtoru zĂ­skanĂŠho z generĂĄtoru postorder()
console.log("postorder")
for (let n of t.postorder()) {
	console.log(n);
}