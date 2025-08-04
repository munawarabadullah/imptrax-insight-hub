# ChangeLog

## 2024-01-05 - Package Manager Cleanup

### Changed
- **Renamed `bun.lockb` to `bun.lockb.backup`**
  - **Reason**: The project had both npm (`package-lock.json`) and bun (`bun.lockb`) lock files, which can cause package manager conflicts
  - **Action**: Renamed bun lock file to backup extension to preserve the information while avoiding conflicts
  - **Impact**: Project now uses npm as the primary package manager (as indicated by the npm scripts in package.json)
  - **Safety**: Original bun lock file preserved as backup for future reference if needed

### Notes
- The project uses npm scripts (`npm run dev`, `npm run build`, etc.) as defined in package.json
- Having multiple package manager lock files can lead to dependency resolution conflicts
- The backup file can be restored if bun package manager is needed in the future