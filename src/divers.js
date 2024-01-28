/**
 * @description Definie la variable pour le hash du premier bloc
 * @type {string}
 */
export const monSecret = "";

/**
 * @description Retourne un timestamp au format aaaammjj-hh:mm:ss
 * @return {string}
 */
export function getDate() {
    const date = new Date();
    const annee = date.getFullYear();
    const mois = date.getMonth();
    const jour = date.getDay();
    const heure = date.getHours();
    const minute = date.getMinutes();
    const seconde = date.getSeconds();
    return `${annee}${mois<10?"0"+mois:mois}${jour<10?"0"+jour:jour}-${heure<10?"0"+heure:heure}:${minute<10?"0"+minute:minute}:${seconde<10?"0"+seconde:seconde}`;
}