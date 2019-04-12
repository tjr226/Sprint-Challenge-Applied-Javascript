class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    // console.log(this.tabElement);
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab; 
    // this.data = `.tab-item[data-tab='${this.element.dataset.tab}']`;
    // this.tabData = `.tab[data-tab='${this.tabElement.dataset.tab}']`;
    // console.log(this.tabData);

    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    console.log('new TabLink');
    console.log(this.tabdata);
    // Check to see if this.tabData is equal to 'all'
    if(this.tabdata = "all"){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
      // console.log('all');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      // this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
      this.cards = document.querySelectorAll(this.tabData)
      // console.log(this.tabData);
    }
    

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(card => new TabCard(card));

    // Add a click event that invokes this.selectTab
    // this.tabElement.addEventListener('click', () => 
    //   console.log('selectTab clicked');
    //   this.selectTab());
    this.tabElement.addEventListener('click', function() {
      console.log('selectTabElement click successful');
      console.log(this);
      this.selectTab;
    });
  }

  selectTab() {
    console.log('selectTab function running');
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach( tab => { tab.classList.remove('active-tab')})

    // Select all of the elements with the .card class on them
    // NOTE - Tim Rooney changed the variable from "cards" to "allCards" to better differentiate from this.cards
    const cards = document.querySelectorAll('.card');

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(function(card){
      card.style.display = 'None';
    });
    // cards.forEach( card => { card.style.display = 'None' });
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab');
    // console.log('selectTab TabLink');
    // console.log(this);
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    // this.cards.forEach(card => card.selectCard());
    this.cards.forEach(function(card){
      card.selectCard();
    });
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = "flex";
  }

}

/* START HERE: DONE

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab');

tabs.forEach(function(tab){
  return new TabLink(tab);
});