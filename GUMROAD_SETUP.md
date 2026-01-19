# Gumroad + Printful Setup Guide

This guide walks you through connecting your Black Cat Barber shop to Gumroad and Printful for automated print-on-demand fulfillment.

## Overview

- **Gumroad**: Handles payments and checkout (10% + $0.30 per transaction)
- **Printful**: Handles printing and shipping (no monthly fees, pay per order)
- **Your Website**: Displays products with "Buy Now" buttons linking to Gumroad

## Step 1: Create Your Printful Account

1. Go to [printful.com](https://www.printful.com) and sign up
2. Choose "I have my own online store" option
3. Skip the store connection for now (we'll connect via Gumroad later)

### Design Your Shirts in Printful

1. Click **"Add Product"** in your Printful dashboard
2. Select **"Unisex Staple T-Shirt"** (or your preferred style)
   - Recommended: Bella+Canvas 3001 (soft, high-quality)
3. Click **"Start Designing"**

#### For Each of Your 3 Shirts:

**Black Cat Classic:**
1. Upload your Black Cat logo design
2. Position it centered on the front
3. Select available sizes: S, M, L, XL, 2XL
4. Click **"Proceed to Mockups"**
5. Generate mockups (Printful will create product photos)
6. Download the **800x800px square mockup** (this replaces your current placeholder)
7. Click **"Proceed to Product Details"**
8. Name it: "Black Cat Classic Tee"
9. Set your **retail price**: $35
10. Click **"Submit to Store"**
11. **Important**: Copy the **Product ID** (you'll need this later)

**Vinyl Night:**
1. Repeat the process with your vinyl-themed design
2. Retail price: $35
3. Copy the Product ID

**Scare the Kids:**
1. Repeat with your "Scare the Kids" design
2. Retail price: $40
3. Copy the Product ID

### Download Your New Mockups

Replace the current images in `/src/images/shop/` with your Printful mockups:
- `black-cat-classic.webp` (from Printful mockup generator)
- `collective-vibes.webp` (your vinyl design)
- `gig-harbor-edition.webp` (Scare the Kids design)

Make sure they're 800x800px and converted to WebP format.

---

## Step 2: Create Your Gumroad Account

1. Go to [gumroad.com](https://gumroad.com) and sign up
2. Choose a custom URL: `blackcatbarber.gumroad.com`
3. Complete your profile setup
4. Add payment details (where you'll receive money)

### Set Up Your Gumroad Products

Create 3 products in Gumroad, one for each shirt:

#### Product 1: Black Cat Classic

1. Click **"New Product"**
2. Select **"Physical Product"**
3. **Product Details:**
   - Name: `Black Cat Classic Tee`
   - Price: `$35.00`
   - Upload a product image (use the same Printful mockup)
   - Description: "Premium cotton tee featuring our signature Black Cat logo"
4. **Variants (Sizes):**
   - Click **"Add Variant"**
   - Type: "Size"
   - Options: S, M, L, XL, 2XL
   - Keep all prices the same ($35)
5. **Shipping:**
   - Weight: 0.5 lbs
   - Enable shipping to your target countries (US, Canada, etc.)
6. **Physical Product Settings:**
   - Check "This is a physical product"
   - Shipping: "I'll handle shipping" (Printful will actually handle it)
7. Click **"Save"**
8. **Copy the product URL** (e.g., `https://blackcatbarber.gumroad.com/l/classic-tee`)

#### Product 2: Vinyl Night

Repeat the same process:
- Name: `Vinyl Night Tee`
- Price: `$35.00`
- Variants: S, M, L, XL, 2XL
- Copy the URL (e.g., `https://blackcatbarber.gumroad.com/l/vinyl-tee`)

#### Product 3: Scare the Kids

Repeat again:
- Name: `Scare the Kids Tee`
- Price: `$40.00`
- Variants: S, M, L, XL, 2XL
- Copy the URL (e.g., `https://blackcatbarber.gumroad.com/l/scare-kids-tee`)

---

## Step 3: Connect Printful to Gumroad

### In Gumroad:

1. Go to **Settings** → **Integrations**
2. Find **"Printful"** in the integrations list
3. Click **"Connect"**
4. You'll be redirected to Printful to authorize the connection

### In Printful:

1. After authorizing, you'll see Gumroad as a connected store
2. Go to **Stores** → **Gumroad**
3. Click **"Import Products"** or **"Sync Products"**

### Map Your Products:

For each Gumroad product, you need to link it to the corresponding Printful product:

1. In Printful, go to **"Stores"** → **"Gumroad"**
2. Find your Gumroad products in the list
3. Click **"Connect to Printful Product"** for each one
4. Match:
   - **Gumroad: Black Cat Classic** ↔ **Printful: Black Cat Classic Tee**
   - **Gumroad: Vinyl Night** ↔ **Printful: Vinyl Night Tee**
   - **Gumroad: Scare the Kids** ↔ **Printful: Scare the Kids Tee**
5. Map the size variants:
   - Gumroad "S" → Printful "S"
   - Gumroad "M" → Printful "M"
   - etc.

---

## Step 4: Update Your Website

Now that you have real Gumroad product URLs, update your `src/data/shop.json`:

```json
{
  "shirts": [
    {
      "id": "black-cat-classic",
      "name": "Black Cat Classic",
      "description": "Premium cotton tee featuring our signature Black Cat logo",
      "price": "$35",
      "gumroadUrl": "https://blackcatbarber.gumroad.com/l/classic-tee",
      "sizes": ["S", "M", "L", "XL", "2XL"],
      "image": "/src/images/shop/black-cat-classic.webp",
      "bgColor": "#436852"
    },
    {
      "id": "collective-vibes",
      "name": "Vinyl Night",
      "description": "Celebrate the craft with this exclusive design",
      "price": "$35",
      "gumroadUrl": "https://blackcatbarber.gumroad.com/l/vinyl-tee",
      "sizes": ["S", "M", "L", "XL", "2XL"],
      "image": "/src/images/shop/collective-vibes.webp",
      "bgColor": "#436852"
    },
    {
      "id": "scare-the-kids",
      "name": "Scare the Kids",
      "description": "Limited edition celebrating our Gig Harbor home",
      "price": "$40",
      "gumroadUrl": "https://blackcatbarber.gumroad.com/l/scare-kids-tee",
      "sizes": ["S", "M", "L", "XL", "2XL"],
      "image": "/src/images/shop/gig-harbor-edition.webp",
      "bgColor": "#436852"
    }
  ]
}
```

Replace the URLs with your actual Gumroad product links!

---

## Step 5: Test Your Complete Flow

### Test Purchase:

1. Visit your website: `http://localhost:4321` (or your live site)
2. Scroll to the Shop section
3. Click **"Buy Now"** on one of the shirts
4. You should be redirected to Gumroad
5. Select a size and complete checkout (use a real payment or test mode)
6. After purchase:
   - Customer receives confirmation email from Gumroad
   - Order appears in your Gumroad dashboard
   - Order is **automatically forwarded to Printful**
   - Printful begins production and shipping

### Check Printful Dashboard:

1. Log into Printful
2. Go to **"Orders"**
3. Your test order should appear with status "In Production"
4. Printful will print the shirt and ship it to the customer
5. Tracking info is sent back to Gumroad and emailed to customer

---

## Step 6: Pricing Strategy

Make sure your pricing covers all costs:

### Example for $35 Shirt:

| Item | Cost |
|------|------|
| Retail Price | $35.00 |
| Gumroad Fee (10%) | -$3.50 |
| Gumroad Transaction Fee | -$0.30 |
| Printful Base Cost | -$15.00* |
| Printful Shipping | -$4.99* |
| **Your Profit** | **~$11.21** |

*Printful costs vary by product and shipping location

### Tips:
- Check Printful's pricing calculator for exact costs
- Factor in shipping to your furthest customers
- $35-40 is competitive for quality POD tees
- No upfront costs or inventory risk!

---

## Step 7: Going Live

### Pre-Launch Checklist:

- [ ] All 3 shirts designed in Printful
- [ ] Printful mockups downloaded and added to website
- [ ] All 3 products created in Gumroad
- [ ] Printful connected to Gumroad
- [ ] Products mapped correctly (sizes match)
- [ ] Test purchase completed successfully
- [ ] Order appeared in Printful dashboard
- [ ] Website `shop.json` updated with real Gumroad URLs
- [ ] Website deployed to production

### After Launch:

1. **Monitor Orders:**
   - Check Gumroad dashboard daily for new orders
   - Watch Printful for fulfillment status
   - Respond to customer questions promptly

2. **Customer Service:**
   - Typical fulfillment: 7-10 business days
   - Printful provides tracking numbers automatically
   - Handle returns/exchanges through Printful's system

3. **Marketing:**
   - Share your shop on Instagram
   - Post product photos on social media
   - Consider offering limited-time designs
   - Use Gumroad's discount code feature for promotions

---

## Troubleshooting

### "Order didn't sync to Printful"
- Check that products are properly mapped in Printful dashboard
- Verify Gumroad integration is still connected
- Contact Printful support (they're very helpful)

### "Customer says size is wrong"
- Double-check size chart matches Printful's
- Update product descriptions with size guide link
- Printful has detailed size charts for each product

### "Shipping costs too high"
- Consider absorbing some shipping cost into product price
- Offer free shipping over $50 (bundle discount)
- Printful has multiple shipping speed options

### "Want to change design after orders placed"
- Don't change the Printful product once orders exist
- Create a new product instead (v2, updated design, etc.)

---

## Monthly Costs

✅ **$0 per month**

You only pay:
- Gumroad: 10% + $0.30 per sale
- Printful: Only when someone orders (product cost + shipping)

No monthly fees, no upfront inventory, no risk!

---

## Resources

- **Printful Help**: [help.printful.com](https://help.printful.com)
- **Gumroad Help**: [help.gumroad.com](https://help.gumroad.com)
- **Printful + Gumroad Guide**: [printful.com/blog/integrating-gumroad-with-printful](https://www.printful.com/blog/integrating-gumroad-with-printful-to-offer-physical-products)
- **Size Charts**: [printful.com/custom-t-shirts/sizing](https://www.printful.com/custom-t-shirts/sizing)

---

## Questions?

If you run into issues:
1. Check Printful's knowledge base first (very comprehensive)
2. Contact Printful support chat (fast response)
3. Email Gumroad support (response within 24 hours)
4. Update your `shop.json` as needed

Good luck with your Black Cat Barber merch! 🐈‍⬛✂️
