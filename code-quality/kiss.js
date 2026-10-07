function getTotalWithCoupon({ couponCode, total }) {
    if (couponCode.length !== 6) {
        throw new Error('Invalid coupon code');
    }

    const discountAmount = total * 0.1;

    return total - discountAmount;
}

export function calculateDiscountedPrice({
    basePrice,
    discountPercentage,
    taxPercentage,
    shippingCost,
    couponCode
}) {
    const discountAmount = basePrice * (discountPercentage / 100);
    const subTotal = basePrice - discountAmount;

    const taxAmount = subTotal * (taxPercentage / 100);

    let total = subTotal + taxAmount + shippingCost;

    if (couponCode) {
        total = getTotalWithCoupon({
            couponCode,
            total
        });
    }

    return total.toFixed(2);
}