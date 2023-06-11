function calculate_levels(
    growth_rates_costs: number[],
    growth_rates_production: number[],
    initial_costs: number,
    initial_production: number,
    prestige_points_costs: number,
    prestige_points_production: number,
    level: number,
    level_end: number,
    previous_costs: number,
    previous_production: number
) {
    if (level <= level_end) {
        let growth_rate_costs, growth_rate_production
        if (level <= 25) {
            growth_rate_costs = growth_rates_costs[0]
            growth_rate_production = growth_rates_production[0]
        } else if (level <= 50) {
            if (level === 26) {
                initial_costs = previous_costs
                initial_production = previous_production
            }
            growth_rate_costs = growth_rates_costs[1]
            growth_rate_production = growth_rates_production[1]
        } else if (level <= 75) {
            growth_rate_costs = growth_rates_costs[2]
            growth_rate_production = growth_rates_production[2]
            if (level === 51) {
                initial_costs = previous_costs
                initial_production = previous_production
            }
        }
        const costs = initial_costs * Math.pow(growth_rate_costs, level - 1 - prestige_points_costs)
        let production
        if (level > 1) {
            production = initial_production * Math.pow(growth_rate_production, level + prestige_points_production)
        } else {
            production = initial_production
        }
        const difference = production - costs
        console.log(level + ' | ' + costs.toFixed(2) + ' | ' + production.toFixed(2) + ' | ' + difference.toFixed(2))
        calculate_levels(
            growth_rates_costs, growth_rates_production, initial_costs, initial_production, prestige_points_costs, prestige_points_production, level + 1, level_end, costs, production
        )
    } else {
        console.log(' ')
        console.log('Finished')
    }
}

console.log('Level | Costs | Production | Difference')
calculate_levels(
    [1.1, 1.2, 1.225], [1.2, 1.1, 1.1], 2, 1, 3, 5, 1, 75, 0, 0
)