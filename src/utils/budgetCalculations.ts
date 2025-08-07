// Utility functions for budget calculations and lead analytics

/**
 * Parses a budget range string and returns the midpoint value
 * @param budgetRange - String like '$50,000 - $150,000' or '$25,000 - $75,000'
 * @returns The midpoint value as a number, or 0 if parsing fails
 */
export function parseBudgetRangeMidpoint(budgetRange: string | null | undefined): number {
  if (!budgetRange || typeof budgetRange !== 'string') {
    return 0;
  }

  try {
    // Remove currency symbols and spaces, then split by dash or hyphen
    const cleanRange = budgetRange.replace(/[$,\s]/g, '');
    const parts = cleanRange.split(/[-–—]/);
    
    if (parts.length !== 2) {
      return 0;
    }

    const minValue = parseFloat(parts[0]);
    const maxValue = parseFloat(parts[1]);
    
    if (isNaN(minValue) || isNaN(maxValue)) {
      return 0;
    }

    // Return the midpoint
    return (minValue + maxValue) / 2;
  } catch (error) {
    console.warn('Error parsing budget range:', budgetRange, error);
    return 0;
  }
}

/**
 * Calculates the total budget pipeline from an array of leads
 * @param leads - Array of lead objects with budget_range property
 * @returns Total pipeline value as a number
 */
export function calculateTotalBudgetPipeline(leads: Array<{ budget_range?: string | null }>): number {
  if (!Array.isArray(leads) || leads.length === 0) {
    return 0;
  }

  return leads.reduce((total, lead) => {
    const midpoint = parseBudgetRangeMidpoint(lead.budget_range);
    return total + midpoint;
  }, 0);
}

/**
 * Formats a number as currency for display
 * @param amount - The amount to format
 * @param currency - Currency symbol (default: '$')
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: string = '$'): string {
  if (isNaN(amount)) {
    return `${currency}0`;
  }

  return `${currency}${amount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}`;
}

/**
 * Calculates lead status breakdown from an array of leads
 * @param leads - Array of lead objects
 * @returns Object with counts for each status
 */
export function calculateLeadStatusBreakdown(leads: Array<{ 
  lead_status?: string | null;
  urgency?: string | null;
}>) {
  if (!Array.isArray(leads)) {
    return {
      total: 0,
      new: 0,
      contacted: 0,
      qualified: 0,
      converted: 0,
      highPriority: 0
    };
  }

  const breakdown = {
    total: leads.length,
    new: 0,
    contacted: 0,
    qualified: 0,
    converted: 0,
    highPriority: 0
  };

  leads.forEach(lead => {
    // Count by lead_status
    switch (lead.lead_status?.toLowerCase()) {
      case 'new':
        breakdown.new++;
        break;
      case 'contacted':
        breakdown.contacted++;
        break;
      case 'qualified':
        breakdown.qualified++;
        break;
      case 'converted':
        breakdown.converted++;
        break;
    }

    // Count high priority by urgency
    if (lead.urgency?.toLowerCase() === 'high') {
      breakdown.highPriority++;
    }
  });

  return breakdown;
}