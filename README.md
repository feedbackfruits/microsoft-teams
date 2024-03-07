# Microsoft Teams

## Releasing

### Development

```
zip -j -r FeedbackFruits\ Development.zip development/manifest.json *.png
```

### Staging

```
zip -j -r FeedbackFruits\ Staging.zip staging/manifest.json *.png
```

### Production

```
zip -j -r FeedbackFruits.zip app/manifest.json *.png
zip -j -r FeedbackFruits\ AU.zip au/manifest.json *.png
zip -j -r FeedbackFruits\ EU.zip eu/manifest.json *.png
zip -j -r FeedbackFruits\ US.zip us/manifest.json *.png
```
