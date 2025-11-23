"use client"

import { useState } from "react"
import Link from "next/link"
import FrostBackdrop from "@/components/FrostBackdrop"

export default function PayInvoice() {
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "card">("card")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardName, setCardName] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
      
      // Reset form after showing success
      setTimeout(() => {
        setShowSuccess(false)
        setInvoiceNumber("")
        setAmount("")
        setCardNumber("")
        setExpiryDate("")
        setCvv("")
        setCardName("")
      }, 3000)
    }, 2000)
  }

  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center overflow-hidden bg-gradient-to-b from-blue-200 to-blue-50">
        <FrostBackdrop />

        <div className="relative z-10 w-full max-w-2xl px-4 py-12">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 mb-8 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          {/* Payment Form Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/50">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-blue-900 mb-2">Pay Invoice</h1>
              <p className="text-gray-600">Enter your invoice details to make a payment</p>
              <div className="mt-4 px-4 py-2 bg-yellow-100 border border-yellow-400 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Demo Mode:</strong> This is a UX demonstration. No actual payment will be processed.
                </p>
              </div>
            </div>

            {showSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-800 font-semibold">Payment Successful! (Demo)</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Invoice Details */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="invoiceNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Invoice Number
                  </label>
                  <input
                    type="text"
                    id="invoiceNumber"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="INV-2024-001"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-2">
                    Amount (USD)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1000.00"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                      paymentMethod === "card"
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"
                    }`}
                  >
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Credit Card
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                      paymentMethod === "paypal"
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"
                    }`}
                  >
                    <div className="text-2xl mb-2">💳</div>
                    PayPal
                  </button>
                </div>
              </div>

              {/* Credit Card Form */}
              {paymentMethod === "card" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-semibold text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="cvv" className="block text-sm font-semibold text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="123"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* PayPal Button */}
              {paymentMethod === "paypal" && (
                <div className="animate-in fade-in duration-300">
                  <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg text-center">
                    <p className="text-gray-600 mb-4">
                      You will be redirected to PayPal to complete your payment.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="font-semibold">Secure PayPal Checkout</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  isProcessing
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Pay ${amount ? `$${amount}` : "Invoice"}`
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                🔒 Your payment information is secure and encrypted
              </p>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-blue-900">
              Need help? Contact us at{" "}
              <a href="mailto:billing@subzeroresearch.com" className="underline hover:text-blue-700">
                billing@subzeroresearch.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
