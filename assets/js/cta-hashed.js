
export default function renderPlan(plan) {
  const plans = [
    
    { id: 5, product_id: 9844, variations: { month: { id: 9854, cost: '500' }, annual: { id: 9952, cost: '5000' } } },
    { id: 10, product_id: 9844, variations: { month: { id: 9845, cost: '1,000' }, annual: { id: 9939, cost: '10,000' } } },
    { id: 15, product_id: 9844, variations: { month: { id: 9847, cost: '1,500' }, annual: { id: 9940, cost: '15,000' } } },
    { id: 20, product_id: 9844, variations: { month: { id: 9848, cost: '2,000' }, annual: { id: 9941, cost: '20,000' } } },
    { id: 25, product_id: 9844, variations: { month: { id: 9849, cost: '2,500' }, annual: { id: 9942, cost: '25,000' } } },
    { id: 30, product_id: 9844, variations: { month: { id: 9850, cost: '3,000' }, annual: { id: 9943, cost: '30,000' } } },
    { id: 35, product_id: 9844, variations: { month: { id: 9851, cost: '3,500' }, annual: { id: 9944, cost: '35,000' } } },
    { id: 40, product_id: 9844, variations: { month: { id: 9852, cost: '4,000' }, annual: { id: 9945, cost: '40,000' } } },
    { id: 45, product_id: 9844, variations: { month: { id: 9853, cost: '4,500' }, annual: { id: 9946, cost: '45,000' } } },
    { id: 50, product_id: 9844, variations: { month: { id: 9855, cost: '5,000' }, annual: { id: 9947, cost: '50,000' } } },
    { id: 60, product_id: 9844, variations: { month: { id: 9856, cost: '6,000' }, annual: { id: 9948, cost: '60,000' } } },
    { id: 70, product_id: 9844, variations: { month: { id: 9857, cost: '7,000' }, annual: { id: 9949, cost: '70,000' } } },
    { id: 80, product_id: 9844, variations: { month: { id: 9858, cost: '8,000' }, annual: { id: 9950, cost: '80,000' } } },
    { id: 90, product_id: 9844, variations: { month: { id: 9859, cost: '9,000' }, annual: { id: 9951, cost: '90,000' } } },
    { id: 100, product_id: 9844, variations: { month: { id: 9846, cost: '10,000' }, annual: { id: 9938, cost: '100,000' } } }
  ];

  let monthContainer = jQuery('#monthly');
  console.log('Month container: ', monthContainer);
  let annualContainer = jQuery('#annual');
  const errorContainer = jQuery('#error');
  const planContainer = jQuery('#plan-data');

  let costTemplate = (selectedPlan, type) => `<div id="${ type ? 'month' : 'annual' }-plan-${ plan }"><h5>$${ type ? selectedPlan.variations.month.cost : selectedPlan.variations.annual.cost }</h5><a href="https://mentumm.com/cart/?add-to-cart=${ selectedPlan.product_id }&variation_id=${ type ? selectedPlan.variations.month.id : selectedPlan.variations.annual.id }" class="button button--teal active" role="link">Register here</a></div>`;

  let selected = plans.find(x => x.id === plan);
  let index = plans.indexOf(selected);

  if (selected && (index >= 0)) {
    monthContainer.html(costTemplate(plans[index],true));
    annualContainer.html(costTemplate(plans[index],false));
  } else {
    errorContainer.show();
    planContainer.hide();
  }

}
