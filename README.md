# Bêta 0.3:
1. Structure fonctionnelle (PHP+)
2. Détection des touches directionnelles et changement de position de Link
3. Interactions sociales **(+animation)**

Voir l'[organisation](#lorganisation).
Voir le [guide](#guide) pour tester le site.

### Modifications récentes
1. Autre menu
2. Background
3. Essais de styles d'animations
4. Livre animé pour le journal

### À faire:
* Créer un tableau javascript/jquery et marquer un deplacement quelconque avec les touches directionnelles
* Déplacer l'arrière plan pour le déplacement de link avec les touches directionnelles :tired_face:
* ~~Animation de la souris~~
* ~~Texte dans un encadré style Zelda/Moyen-Âge~~
* Animation de fées pour les commandites

### Plus tard:
* **Création de la page facebook, twitter et la chaine youtube**
* Créations artistiques de photo à style pixelisé
* Ajout de sons :mag_right:

## L'organisation
### Templates [ici](templates)
**avant-head.php** : Commentaires et IP block (et Login si il y a lieu)

**head.php** : Charset, favicon, links CSS, description

**haut-page.php** : Login System, Titre et Navigation

**bas-page.php** : Communication Email, Facebook, etc

**footer.php** : Copyright

**scripts.php** : Scripts

### CSS et dépendances [ici](dependances)
Utilisation de Uikit et de FontAwesome. Jquery pour les scripts.

### Media [ici](dependances)
On retrouve ici les spritesheets de Zelda, la map, etc.
L'ajout de photos se fera lors de la finition.

## Guide
1.  Télécharger [Zwamp](http://zwamp.sourceforge.net/)
2.  Télécharger ce répertoire (en zip)
3.  Copier les fichiers de ce répertoire et les mettre dans le dossier **zwamp/vdrive/web** (effacez les fichiers précédents au besoin)
4.  Lancez **zwamp.exe**
5.  Allez dans le navigateur et tapez **localhost** avant d'appuyer sur Enter
6.  Savourez