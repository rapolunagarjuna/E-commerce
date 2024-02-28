import PurchaseOrder from '../models/PurchaseOrder.js';
import Mapping from '../models/Mapping.js';

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
      
      req.body.items.forEach(async item => {
        let mapping = await Mapping.findOne({secondaryCode: item.secondaryCode});
        if (mapping == null) {
          mapping = new Mapping(
            {
              secondaryCode: item.secondaryCode,
              primaryCode: item.primaryCode,
            }
          );
          mapping.save();
        }
      })

      purchaseOrder.save();
      res.status(201).json(purchaseOrder);
    } catch (error) {
      res.status(500).json({ error: 'internal error' });
    }
  };