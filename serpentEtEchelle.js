//--------------------------------------------------Beatriz Kanzki et Valentin Akando-----------------------------------------------//
//--------------------------------------------------------serpentEtEchelle.js-------------------------------------------------------//

//1---------------- creer une matrice---------------------------------------------
var creerMatrice = function (nbLignes, nbColonnes)
{
    var resultat = Array(nbLignes);
    for (var i=0; i<nbLignes; i++) 
    {
        resultat[i] = Array(nbColonnes);      
	}
    return resultat;
};
//---------------fin creerMatrice---------------------------------------------------------

//2--------------Placer les joueurs sur la matrice----------------------------------------
var placerPillon=function(matrice,position,nom)
{var ligne=Math.floor((position-1)/8);
 var colonne=(position-1)%8;
    
if(ligne%2==0)//je suis à une ligne paire dans le tableau
	{
    	matrice[ligne][colonne]=nom;
	}
else	//je suis à une ligne impaire dans le tableau
	{
    	matrice[ligne][7-colonne]=nom;
	}
 return matrice;
};
//-------------fin placerPillon-----------------------------------------------------------

//3-------------- Mettre à jour la matrice après chaque lancée de dé----------------------
var mettreAjourMatrice=function(matrice,positionP1,positionP1)
{for(var i=0; i<matrice.length; i++)
	{
    	for(var j=0; j<matrice[i].length; j++)
        {
          matrice[i][j]='  ';  
        }
	}
    matrice[0][2]=matrice[2][7]=matrice[3][3]=matrice[5][5]='E ';//les positions de Echelle
    matrice[2][2]=matrice[3][5]=matrice[7][2]=matrice[7][6]='S ';//les positions de Serpent    
    matrice[1][0]=matrice[5][5]=matrice[6][3]=matrice[7][5]='P ';//les positions de Pièges    
 	if(positionP1>0&&positionP1<65){matrice=placerPillon(matrice,positionP1,'P1');} //la position du joueur P1
 	if(positionP2>0&&positionP2<65){matrice=placerPillon(matrice,positionP2,'P2');} //la position du joueur P2
 	return matrice;
};
//-------------fin mettreAjourMatrice-----------------------------------------------------

//4------------Imprimer une matrice------------------------------------------------------
var printMatrice=function(matrice)
{var table=new Array();
table[27]=' __ __ __ __ __ __ __ __';
table[26]='|  |  |  |  |  |  |  |  |';
table[25]='';
table[24]='|__|__|__|__|__|__|__|__|'; 
table[23]='|  |  |  |  |  |  |  |  |';
table[22]='';
table[21]='|__|__|__|__|__|__|__|__|';  
table[20]='|  |  |  |  |  |  |  |  |';
table[19]='';
table[18]='|__|__|__|__|__|__|__|__|'; 
table[17]='|  |  |  |  |  |  |  |  |';
table[16]='';
table[15]='|__|__|__|__|__|__|__|__|'; 
table[14]='|  |  |  |  |  |  |  |  |';
table[13]='';
table[12]='|__|__|__|__|__|__|__|__|'; 
table[11]='|  |  |  |  |  |  |  |  |';
table[10]='';
 table[9]='|__|__|__|__|__|__|__|__|';
 table[8]='|  |  |  |  |  |  |  |  |';
 table[7]='';
 table[6]='|__|__|__|__|__|__|__|__|';
 table[5]='|  |  |  |  |  |  |  |  |';
 table[4]='';
 table[3]='|__|__|__|__|__|__|__|__|';
 table[2]='';
 table[1]='';
 table[0]='';

 var tempo=new Array();//tableau temporaire de transfer
	for (var i=4;i<table.length; i+=3) 			//transfert de matrice
		{for(var j=0;j<=table[3].length-9; j++)
   			{
     		 if(j%2==0)
      		 tempo[j]='|'; 
     		 else					
       	 	tempo[j]=matrice[(i-4)/3][(j-1)/2]; //ligne i de table<->ligne (i-4)/3 de matrice
  	 		} 							//colonne j de table<->colonne ((j-1)/2 de matrice		
     	table[i]+=tempo.join('');    
		}
	for(var i=table.length-1; i>=3; i--)		//impression de matrice
		{
  		 print(table[i]);
        }
};
//-----------------fin printMatrice-------------------------------------------------------

//5----------------Déterminer le nombre de joueurs-------------------------------------
var combienDeJoueur=function()
{    
    var reponse=prompt('Beatriz & Valentin vous saluent'+'\n'+'Vous jouez seul?: o=oui, n=non');
    while(reponse!='o'&&reponse!='O'&&reponse!='n'&&reponse!='N')
    {
        reponse=prompt('Vous jouez seul?'+'\n'+'Vous devez répondre par: o=oui, n=non');
    }
    if(reponse=='o'||reponse=='O'){return 1;}  
    else {return 2;}
};

//fin-----------------combienDeJoueur-------------------------------------------------------

//6----------------Déterminer qui joue le premier-------------------------------------
function quiJoueLePremier(nbrJoueur)
{
    do
    {var reponse=prompt('Voyons! A qui le premier jeu?','P1: appuyez \'OK\' pour lancer le dé');
     var temp1=randomInt(1,6);
     print('P1: '+temp1); 
     if(nbrJoueur==2)
     {reponse=prompt('Voyons! A qui le premier jeu?','P2: appuyez \'OK\' pour lancer le dé');};
     var temp2=randomInt(1,6);
     print('P2: '+temp2);
    }
    while(temp1==temp2);
    if(temp1>temp2){return false;}//P1 jouera le premier
    else{return true;}  //P2 jouera le premier  
}

//-----------------quiJoueLePremier-------------------------------------------------------

//7----------------Vérifier les réponses aux quetions-------------------------------------
var question=Array(10);               //creation du tableau des 10 questions
question[0]="Quel est le rapport entre Java et Javascript?"+"\n"+"  a. C'est le meme language,mais le nom Javascript est utilise pour le code s'executant dans une page web."+"\n"+"  b. Ce sont deux languages differents, malgre quelques points communs dans la syntaxe."+"\n"+"  c. Java est une version amelioree de Javascript."+"\n"+"  d. Java est une ile, ca n'a rien a voir!"+"\n"+"";
question[1]="Laquelle de ces syntaxe est correcte?"+"\n"+"  a. if (a!=2){}"+"\n"+"  b. if a!=2{}"+"\n"+"  c. if (a<>2){}"+"\n"+"  d. if a<>2{}"+"\n"+"";
question[2]="Quel est attribut des noeuds de l'arbre DOM correspond a l'attribut (X)HTML class?"+"\n"+"  a. class"+"\n"+"  b. CLASS"+"\n"+"  c. className"+"\n"+"  d. kiwi"+"\n"+"";
question[3]="Dans un fichier Javascript externe(.js), il faut:"+"\n"+"  a. entourer le code avec les balises <script> et </script>."+"\n"+"  b. preciser l'encodage du fichier avec la regle @charset."+"\n"+"  c. echapper les caracteres speciaux(X)HTML."+"\n"+"  d. aucune des reponses precedentes."+"\n"+"";
question[4]="Lequel de ces types d'evenements n'existe pas?"+"\n"+"  a. blur"+"\n"+"  b. load"+"\n"+"  c. mouseclick"+"\n"+"  d. mouseout"+"\n"+"";
question[5]="Quelle methode n'existe pas dans le DOM?"+"\n"+"  a. document.getElementsByClassName"+"\n"+"  b. document.getElementsByTagName"+"\n"+"  c. document.getElementsByAttribute"+"\n"+"  d. document.getElementById"+"\n"+"";
question[6]="Laquelle de ces propositions est un nom de variable valide en Javascript?"+"\n"+"  a. var"+"\n"+"  b. 2a"+"\n"+"  c. NaN"+"\n"+"  d. $b"+"\n"+"  e. default";
question[7]="Dans une boucle, l'instruction continue permet de:"+"\n"+"  a. continuer l'execution du code apres la boucle"+"\n"+"  b. passer a l'iteration suivante."+"\n"+"  c. revenir au debut de l'iteration courante."+"\n"+"  d. supprimer toutes les variables globales."+"\n"+"";
question[8]="var iNum=12;iNum%=2; A la suite de cette expression, combien vaut iNum?"+"\n"+"  a. 6"+"\n"+"  b. 14"+"\n"+"  c. 0.12"+"\n"+"  d. 0"+"\n"+"";
question[9]="Quelle methode permet de comparer deux chaines texte?"+"\n"+"  a.charAt()"+"\n"+"  b. charCodeAt()"+"\n"+"  c. indexOf()"+"\n"+"  d.localeCompare()"+"\n"+"";

var repQuestion=new Array(10);         //tableau reponse aux 10 questions
repQuestion[0]="b";
repQuestion[1]="a";
repQuestion[2]="c";
repQuestion[3]="d";
repQuestion[4]="c";
repQuestion[5]="c";
repQuestion[6]="d";
repQuestion[7]="b";
repQuestion[8]="d";
repQuestion[9]="d";
//-------------------------------------Verifie reponse aux questions------------------------------------
var verifRep=function(reponse,numQuestion){                                 
    if (reponse!=repQuestion[numQuestion]) {
        return false;
    }
    else{
      	return true;
    }
};
//-----------------fin verifRep----------------------------------------------------------

//8----------------Afficher les quetions-------------------------------------------------

var afficheQuestion=function(numQuestion,nbrJoueur){                           //affiche les questions avec les reponses
    var reponse='';
    if(nbrJoueur==2)
    	{reponse=prompt(question[numQuestion]+"\n\n"+"repondez par a, b, c, d, ou e s'il y a lieu");
    	while (reponse!="a"&&reponse!="b"&&reponse!="c"&&reponse!="d"&&reponse!="e") 
        	{                              //boucle qui devient infini tant que joueur ne tape pas a,b,c,d,ou e
        	reponse=prompt("Il faut choisir a, b, c, d ou e uniquement"+"\n\n\n\n"+question[numQuestion]);
   			}
        }
     else 
     {reponse=repQuestion[randomInt(0,9)];}
    
    return verifRep(reponse,numQuestion);                                   //verifie les reponses
};
//-----------------fin afficheQuestion--------------------------------------------------------

//9--------------Nombre aléatoire entre [mini,maxi]---------------------------------------
function randomInt(mini, maxi)
{
        var nb = mini + (maxi+1-mini)*Math.random();
        return Math.floor(nb);
}
//---------------fin randomInt------------------------------------------------------------

//10--------------Lancer de dé (ceci est une procedure)------------------------------------
var lancerDe=function(joueurX,positionX,nbrJoueurX)//cette procedure met a jour des variables globales
{var joueurActuel=joueurX;  
 var ancPosition= positionX;//sauvegarder la position actuelle
 var temp=positionX+randomInt(1,6);
   switch(temp)
   { case 3: positionX=18;//les échelles
          	 joueurX=!joueurX;
               break;
     case 24: positionX=39;
           	  joueurX=!joueurX;
               break;       
     case 29: positionX=53;
              joueurX=!joueurX;
               break;
     case 48: positionX=63;
              joueurX=!joueurX;
               break; 
     case 19: positionX=5;//les sepents
              joueurX=!joueurX;
               break;
     case 27: positionX=8;
              joueurX=!joueurX;
               break; 
     case 58: positionX=4;
              joueurX=!joueurX;
               break;
     case 62: positionX=32;
              joueurX=!joueurX;
               break;  
     case 16:
     case 59:
           if(afficheQuestion(randomInt(0,9),nbrJoueur)==true)//si bonne reponse
           {positionX=temp;}//prendre la nouvelle position sans passer de main(donc rejouer)
           else {positionX=ancPosition;//si mauvaise reponse, rester en place 
           		 joueurX=!joueurX;}    //et passer la main
           break;
     case 43:
     case 52:
           if(afficheQuestion(randomInt(0,9),nbrJoueur)==true)//si bonne reponse
           {positionX=temp;//prendre la nouvelle position
            joueurX=!joueurX;}//et passer la main
           else {positionX=1;	//si mauvaise reponse, venir en position 1 
           		 joueurX=!joueurX;}    //et passer la main
           break;    
           
     default:      
               positionX=temp;
               joueurX=!joueurX;    
   }
if(joueurActuel==false) {positionP1=positionX;} 

if(joueurActuel==true) {positionP2=positionX;} 
joueur=joueurX;
};
//---------------fin lancerDe------------------------------------------------------------

//11---------------Voulez-vous continue-----------------------------------------------------
var voulezVousContiuer=function(P)
{
    var reponse=prompt(P+': Voulez-vous continuer?: o=oui, n=non','O');
    while(reponse!='o'&&reponse!='O'&&reponse!='n'&&reponse!='N')
    {
        reponse=prompt(P+': Voulez-vous continuer?'+'\n'+'Vous devez répondre par: o=oui, n=non');
    }
    if(reponse=='o'||reponse=='O'){return false;}  
    else {return true;}  //true=fin de jeu
};
//---------------fin voulezVousContiuer--------------------------------------------------------

//---------------Debut test unitaire-----------------------------------------------------
var testJeu=function(){
    assert(combienDeJoueur()==1||combienDeJoueur()==2);
    assert(quiJoueLePremier(2)==false||quiJoueLePremier(2)==true);
    assert(verifRep("a",2)==false);
    assert(verifRep("e",0)==false);
    assert(randomInt(1, 6)<=6&&randomInt(1, 6)>0);				//Verification de certaines fonctions cle du jeu
    assert(randomInt(0, 9)<=9&&randomInt(0, 9)>=0);
    assert(voulezVousContiuer('P1')==true||voulezVousContiuer('P1')==false);
    assert(voulezVousContiuer('P2')==true||voulezVousContiuer('P2')==false);
};
//testJeu();

//---------------fin test unitaire--------------------------------------------------------

//---------------Debut du code Main-------------------------------------------------------
var nbrJoueur=combienDeJoueur();//nombre de joueurs
var joueur=quiJoueLePremier(nbrJoueur);//celui qui joue: false=P1 et true=P2
var decisionP1=false, decisionP2=false;//P1/P2 veut continuer ou non: true=fin du jeu
var positionP1=0,positionP2=0;//positions des joueurs
var matrice=creerMatrice(8,8);

while(decisionP1==false&&decisionP2==false&&positionP1<64&&positionP2<64)
{if(joueur==false)//joueur P1
	{
     decisionP1=voulezVousContiuer('P1');
     lancerDe(joueur,positionP1,nbrJoueur);	 
     print('Jeu P1: '+positionP1);     
	}
 else//joueur P2
	{
     if(nbrJoueur==2){decisionP2=voulezVousContiuer('P2');};
     lancerDe(joueur,positionP2,nbrJoueur);     
     print('Jeu P2: '+positionP2);
 	}
 	matrice=mettreAjourMatrice(matrice,positionP1,positionP2);
    printMatrice(matrice);
}
if(decisionP2==true||positionP1>=64){alert('BRAVO P1; VOUS ETES LE GAGNANT'+'\n'+'Fin du jeu');}
if(decisionP1==true||positionP2>=64){alert('BRAVO P2; VOUS ETES LE GAGNANT'+'\n'+'Fin du jeu');}
//---------------fin Main-----------------------------------------------------------------
