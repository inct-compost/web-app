// Generated by 'unplugin-auto-import'
export {}
declare global {
  const dependsLuminanceColor: typeof import('../../utils/style/dependsLuminanceColor')['dependsLuminanceColor']
  const displayStatus: typeof import('../../utils/utils/displayType')['displayStatus']
  const headerTitle: typeof import('../../utils/utils/headerTitleList')['headerTitle']
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    readonly dependsLuminanceColor: UnwrapRef<typeof import('../../utils/style/dependsLuminanceColor')['dependsLuminanceColor']>
    readonly displayStatus: UnwrapRef<typeof import('../../utils/utils/displayType')['displayStatus']>
    readonly headerTitle: UnwrapRef<typeof import('../../utils/utils/headerTitleList')['headerTitle']>
  }
}
