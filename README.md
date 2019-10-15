# js-kelly-criterion

A JavaScript Kelly Criterion calculator that suggests a bet size when making a sports bet when given the odds of the bet, the probabilities, and the bankroll.

Using the Kelly Criterion is known to minimize the risk of ruin, yet still maximize a bet size when given the probable odds of outcomes. Use of the Criterion is known to be better than guessing or making arbitrary bet sizes.

## For an _even money_ bet, the Kelly criterion computes the wager size percentage by multiplying the percent chance to win by two, then subtracting one. So for a 70% chance to win (or .7 probability), doubling .7 equals 1.4, from which you subtract 1, leaving .4 as your optimal wager size -- 40% of available funds (bankroll).

## For other bets with varying payouts, a different calculation needs to be made, and is computed as follows:

&#402;\* = (bp - q) / b

where:

### &#402;\* is the fraction of the bankroll to wager

### b is the net odds received on the wager

### p is the probability of winning

### q is the probability of losing

```
The probability of winning is unknown in sportsbetting.

The probability of losing is always 1 - p, as it is just the probability remaining of the system (if you don't win, you lose)

To find the net odds, subtract the decimal odds of the sports bet by 1 (usually American football spread bets are 1.91 decimal odds, so be would be .91 (1.91 - 1))
```

Overall, the Kelly Criterion is widely considered a smart and disciplined staking strategy, as opposed to simply betting to level stakes. One potential downside is that you’ll need to accurately assess the percentage chance of a selection winning, so it may be wise to experiment with ‘paper’ bets to see how you get on.

Another option is to use ‘Fractional Kelly’, which means only betting a certain fraction of a recommended bet. For instance, only half the recommended Seahawks bet, or 2.5% of your stack. Although it’s a more cautious method, it reduces the impact of possibly over-estimating your edge and depleting your bankroll.
