new Vue({
    el: '#app',
    data: {
      labels: {
        expand: 'Expand all +',
        collapse: 'Collapse all -' },
  
      accordions: {
        'Experience': { isOpen: false },
        'Insights': { isOpen: false },
        'Credentials': { isOpen: false } } },
  
  
    computed: {
      toggleAllLabel() {
        return this.showCollapseAll ?
        this.labels.collapse :
        this.labels.expand;
      },
      areAllAccordionsOpen() {
        return Object.keys(this.accordions).
        every(key => this.accordions[key].isOpen);
      },
      showCollapseAll() {
        return this.areAllAccordionsOpen;
      },
      showExpandAll() {
        return this.showCollapseAll === false;
      } },
  
    methods: {
      toggleAll() {
        const newIsOpen = this.showExpandAll;
        Object.keys(this.accordions).
        forEach(key => {
          this.accordions[key].isOpen = newIsOpen;
        });
      },
      toggleAccordion(label) {
        const accordion = this.accordions[label];
  
        if (accordion) {
          accordion.isOpen = !accordion.isOpen;
        } else {
          console.error(`Could not find accordion '${label}'`);
        }
      },
      isOpen(label) {
        const accordion = this.accordions[label];
        return accordion ? accordion.isOpen : false;
      } } });