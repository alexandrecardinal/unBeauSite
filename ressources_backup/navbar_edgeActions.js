/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${JournalB}", "mouseenter", function(sym, e) {
         sym.getSymbol("JournalB").play();
         sym.getSymbol("SwordCopy").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${JournalB}", "mouseleave", function(sym, e) {
         sym.getSymbol("JournalB").playReverse();
         sym.getSymbol("SwordCopy").play("stop");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${JournalB}", "click", function(sym, e) {
         window.open("journal.php", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${MediaB}", "click", function(sym, e) {
         window.open("media.php", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${MediaB}", "mouseleave", function(sym, e) {
         sym.getSymbol("MediaB").playReverse();
         sym.getSymbol("SwordCopy2").play("stop");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${MediaB}", "mouseenter", function(sym, e) {
         sym.getSymbol("MediaB").play();
         sym.getSymbol("SwordCopy2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${MembresB}", "mouseenter", function(sym, e) {
         sym.getSymbol("MembresB").play();
         sym.getSymbol("SwordCopy3").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${MembresB}", "mouseleave", function(sym, e) {
         sym.getSymbol("MembresB").playReverse();
         sym.getSymbol("SwordCopy3").play("stop");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${MembresB}", "click", function(sym, e) {
         window.open("membres.php", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CommanditesB}", "click", function(sym, e) {
         window.open("commandites.php", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CommanditesB}", "mouseenter", function(sym, e) {
         sym.getSymbol("CommanditesB").play();
         sym.getSymbol("SwordCopy4").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${CommanditesB}", "mouseleave", function(sym, e) {
         sym.getSymbol("CommanditesB").playReverse();
         sym.getSymbol("SwordCopy4").play("stop");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${AccueilB}", "click", function(sym, e) {
         window.open("index.php", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${AccueilB}", "mouseleave", function(sym, e) {
         sym.getSymbol("AccueilB").playReverse();
         sym.getSymbol("Sword").play("stop");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${AccueilB}", "mouseenter", function(sym, e) {
         sym.getSymbol("AccueilB").play();
         sym.getSymbol("Sword").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Sword'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         this.play("replay");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

   })("Sword");
   //Edge symbol end:'Sword'

   //=========================================================
   
   //Edge symbol: 'JournalB'
   (function(symbolName) {   
   
   })("JournalB");
   //Edge symbol end:'JournalB'

   //=========================================================
   
   //Edge symbol: 'MediaB'
   (function(symbolName) {   
   
   })("MediaB");
   //Edge symbol end:'MediaB'

   //=========================================================
   
   //Edge symbol: 'MembresB'
   (function(symbolName) {   
   
   })("MembresB");
   //Edge symbol end:'MembresB'

   //=========================================================
   
   //Edge symbol: 'CommanditesB'
   (function(symbolName) {   
   
   })("CommanditesB");
   //Edge symbol end:'CommanditesB'

   //=========================================================
   
   //Edge symbol: 'AccueilB'
   (function(symbolName) {   
   
   })("AccueilB");
   //Edge symbol end:'AccueilB'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-365579533");