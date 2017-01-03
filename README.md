# Bêta 0.2:
1. Structure fonctionnelle (PHP+)
2. Détection des touches directionnelles et changement de position de Link
3. Interactions sociales **(+animation)**

Voir l'[organisation](#lorganisation).

### Modifications récentes
1. Menu
2. Background
3. Essais de styles d'animations

### À faire:
* Créer un tableau javascript/jquery et marquer un deplacement quelconque avec les touches directionnelles
* Déplacer l'arrière plan pour le déplacement de link avec les touches directionnelles
* Animation de la souris
* Texte dans un encadré style Zelda/Moyen-Âge
* Animation de fées pour les commandites

### Plus tard:
* Création de la page facebook, twitter et la chaine youtube
* Créations artistiques de photo à style pixelisé
* Ajout de sons

## L'organisation
### Templates [ici](templates)
**avant-head.php** : Commentaires et IP block (et Login si il y a lieu)

**head.php** : Charset, favicon, links CSS, description

**haut-page.php** : Login System, Titre et Navigation

**bas-page.php** : Communication Email, Facebook, etc

**bas-page.php** : Copyright et scripts

### CSS et dépendances [ici](dependances)
Utilisation de Uikit et de FontAwesome. Jquery pour les scripts.

### Media [ici](dependances)
On retrouve ici les spritesheets de Zelda, la map, etc.
L'ajout de photos se fera lors de la finition.
