import PurchaseOrder from '../models/PurchaseOrder.js';

export const getAllPurchaseOrders = async (req, res) => {
    try {
      const purchaseOrders = await PurchaseOrder.find({}); 
      res.status(200).json(purchaseOrders);
    } catch (error) {
      res.status(500).json({ error: 'internal error' });
    }
  };

export const createPurchaseOrder = async (req, res) => {
    try {
      console.log(req.body);
      const purchaseOrder = new PurchaseOrder(
        {
          purchaseOrderNumber: req.body.purchaseOrderNumber,
          shipTo: req.body.shipTo,
          shipVia: req.body.shipVia,
          orderedFrom: req.body.orderedFrom,
          buyer: req.body.buyer,
          totalExtendedPrice: req.body.totalExtendedPrice,
          date: req.body.date,
          terms: req.body.terms,
          items: req.body.items
        }
      );

      purchaseOrder.save();
      res.status(201).json(purchaseOrder);
    } catch (error) {
      res.status(500).json({ error: 'internal error' });
    }
  };