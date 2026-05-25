# Troubleshooting Guide

## TLS Certificate Warning

If you see this warning when running tests:

```
Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
```

### Root Cause

This warning appears because the `NODE_TLS_REJECT_UNAUTHORIZED` environment variable is set to `0` in your system environment. This setting disables SSL/TLS certificate verification, which is insecure.

### Solution

**Windows:**
1. Open System Properties → Advanced → Environment Variables
2. Look for `NODE_TLS_REJECT_UNAUTHORIZED` in both User and System variables
3. Delete this variable
4. Restart your terminal/IDE

**macOS/Linux:**
1. Check your shell profile files (`.bashrc`, `.zshrc`, `.bash_profile`)
2. Remove any line setting `NODE_TLS_REJECT_UNAUTHORIZED=0`
3. Run `source ~/.bashrc` (or appropriate file) or restart terminal

### Why This Matters

- **Security**: Disabling certificate verification makes your connections vulnerable to man-in-the-middle attacks
- **Best Practice**: Production code should never disable TLS verification
- **Portfolio Quality**: Removing this shows professional security awareness

### Verification

After removing the variable, run:
```bash
# Windows
echo %NODE_TLS_REJECT_UNAUTHORIZED%

# macOS/Linux
echo $NODE_TLS_REJECT_UNAUTHORIZED
```

You should see an empty result or "not defined" message.

## Common Issues

### Tests Failing After Removing TLS Variable

If tests fail after removing the variable, it means there was an underlying certificate issue being masked. This is actually good - it reveals real problems that need proper fixes.

**Solutions:**
1. Update Node.js to the latest LTS version
2. Update npm packages: `npm update`
3. Clear npm cache: `npm cache clean --force`
4. Reinstall dependencies: `rm -rf node_modules && npm install`

### API Tests Failing

If API tests fail, check:
1. Internet connection is stable
2. Target APIs (saucedemo.com, jsonplaceholder.typicode.com) are accessible
3. No corporate proxy or firewall blocking requests
4. Environment variables are set correctly in `.env` file

### UI Tests Failing

If UI tests fail, check:
1. Playwright browsers are installed: `npx playwright install`
2. Browser versions are compatible
3. No conflicting browser extensions or settings
4. Sufficient system resources available

## Getting Help

If issues persist:
1. Check the [Playwright documentation](https://playwright.dev)
2. Review test error messages and traces
3. Run tests with `--debug` flag for detailed output
4. Check GitHub Issues for similar problems

## Best Practices

✅ **Do:**
- Keep dependencies updated
- Use proper SSL/TLS certificates
- Follow security best practices
- Test in clean environments

❌ **Don't:**
- Disable certificate verification
- Commit sensitive data to git
- Use production credentials in tests
- Ignore security warnings
