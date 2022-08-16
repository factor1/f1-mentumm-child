
export default function renderPlan(plan) {
  const plans = [
    
    { id: 5, product_id: 9844, variations: { month: { id: 9854, cost: '500' }, annual: { id: 5767, cost: '5999' } } },
    { id: 10, product_id: 9844, variations: { month: { id: 9845, cost: '1,000' }, annual: { id: 5768, cost: '6999' } } },
    { id: 15, product_id: 9844, variations: { month: { id: 9847, cost: '1,500' }, annual: { id: 5769, cost: '7999' } } },
    { id: 20, product_id: 9844, variations: { month: { id: 9848, cost: '2,000' }, annual: { id: 5770, cost: '8999' } } },
    { id: 25, product_id: 9844, variations: { month: { id: 9849, cost: '2,500' }, annual: { id: 5771, cost: '9999' } } },
    { id: 30, product_id: 9844, variations: { month: { id: 9850, cost: '3,000' }, annual: { id: 7146, cost: '10,990' } } },
    { id: 35, product_id: 9844, variations: { month: { id: 9851, cost: '3,500' }, annual: { id: 7148, cost: '11,990' } } },
    { id: 40, product_id: 9844, variations: { month: { id: 9852, cost: '4,000' }, annual: { id: 7150, cost: '12,990' } } },
    { id: 45, product_id: 9844, variations: { month: { id: 9853, cost: '4,500' }, annual: { id: 7152, cost: '13,990' } } },
    { id: 50, product_id: 9844, variations: { month: { id: 9855, cost: '5,000' }, annual: { id: 7154, cost: '14,990' } } },
    { id: 60, product_id: 9844, variations: { month: { id: 9856, cost: '6,000' }, annual: { id: 7239, cost: '15,990' } } },
    { id: 70, product_id: 9844, variations: { month: { id: 9857, cost: '7,000' }, annual: { id: 7241, cost: '16,990' } } },
    { id: 80, product_id: 9844, variations: { month: { id: 9858, cost: '8,000' }, annual: { id: 7243, cost: '17,990' } } },
    { id: 90, product_id: 9844, variations: { month: { id: 9859, cost: '9,000' }, annual: { id: 7245, cost: '18,990' } } },
    { id: 100, product_id: 9844, variations: { month: { id: 9846, cost: '10,000' }, annual: { id: 7247, cost: '19,990' } } }
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
