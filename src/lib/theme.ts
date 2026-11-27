/** Colour themes (palettes live in globals.css under :root[data-theme=...]). */
export const themes = [
  { id: "midnight", label: "Midnight" },
  { id: "royal", label: "Royal" },
  { id: "graphite", label: "Graphite" },
  { id: "light", label: "Light" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];
export const THEME_KEY = "fq-theme";
export const DEFAULT_THEME: ThemeId = "midnight";

/**
 * Runs in <head> before first paint so the page never flashes the default colours.
 * Order: ?theme= or ?color= in the URL, then #name in the URL, then the visitor's last choice.
 * Typing #name into the address bar of an open page also switches, without a reload.
 */
export const themeBootScript = `(function(){try{
var T=${JSON.stringify(themes.map((t) => t.id))},K=${JSON.stringify(THEME_KEY)};
var p=new URLSearchParams(location.search),q=(p.get("theme")||p.get("color")||"").toLowerCase();
var h=location.hash.slice(1).toLowerCase(),t=null;
if(T.indexOf(q)>-1)t=q;else if(T.indexOf(h)>-1)t=h;
if(t)localStorage.setItem(K,t);else t=localStorage.getItem(K);
function A(t){var d=document.documentElement;if(t===${JSON.stringify(DEFAULT_THEME)})d.removeAttribute("data-theme");else d.setAttribute("data-theme",t);}
if(t&&T.indexOf(t)>-1)A(t);
addEventListener("hashchange",function(){var n=location.hash.slice(1).toLowerCase();if(T.indexOf(n)>-1){A(n);try{localStorage.setItem(K,n)}catch(e){}}});
}catch(e){}})();`;
