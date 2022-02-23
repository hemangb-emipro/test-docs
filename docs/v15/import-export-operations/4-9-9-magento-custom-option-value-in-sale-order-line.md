---
layout: default
title: Magento Custom Option Value in Sale Order Line
parent: Import Sale Order
grand_parent: Import/Export Operations
nav_order: 4.9.9
---

### Magento Custom Option Value in Sale Order Line



As Magento allows adding the custom option and its value in the ordered product, We can easily find that custom option and its significance for the Magento from the Magento order shown in the below screen-short.


 


![](./images/4-9-9-1.png)


After importing the order using the connector, users quickly identify the ordered product with its custom option and value, as shown in the below screenshot of the odoo order.


 


![](./images/4-9-9-2.png)


Easily pass and access this custom option value in the Invoice as well.


 


![](./images/4-9-9-3.png)


All the Magento Order-related information is stored in Sale order under the “Magento Information”. As shown in the below screen-short.


In this Tab, Magento Order-related information like Magento Order ID, Order’s Magento Instance, Magento Website, Magento Orders Reference, Magento Store View name, Ordered Payment Method. In case the Magento Order has the Payment Transaction ID, then that Magento Payment Transaction ID will be set in this tab.


If that Order is fulfilled in magento side then the “Order fulfilled in magento” field mark as True under the Magento Information Tab. And Still that order is not fulfilled in the Magento “Order fulfilled in magento” field marked as False.


 


![](./images/4-9-9-4.png)


Using our connector, users easily identify how many orders are still not fulfilled or fulfilled in Magento. To check that we are providing the filter for the same.


 


![](./images/4-9-9-5.png)



