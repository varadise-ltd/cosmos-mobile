import { ScrollView, Text, View } from 'react-native';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-neutral-90">
      {/* Header */}
      <View className="p-24 bg-special-bg-mobile">
        <Text className="text-neutral-0 text-32 font-bold mb-8">Design Tokens</Text>
        <Text className="text-neutral-40 text-16">Showcasing our design system</Text>
      </View>

      {/* Theme Switcher */}
      <View className="p-24">
        <ThemeSwitcher />
      </View>

      {/* Color Showcase */}
      <View className="p-24">
        <Text className="text-neutral-0 text-24 font-semibold mb-16">Colors</Text>

        {/* Blue Variants */}
        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">Blue Scale</Text>
          <View className="flex-row gap-8">
            <View className="w-48 h-48 bg-blue-60 rounded-md" />
            <View className="w-48 h-48 bg-blue-70 rounded-md" />
            <View className="w-48 h-48 bg-blue-80 rounded-md" />
            <View className="w-48 h-48 bg-blue-90 rounded-md" />
          </View>
        </View>

        {/* Neutral Variants */}
        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">Neutral Scale</Text>
          <View className="flex-row gap-8">
            <View className="w-48 h-48 bg-neutral-0 rounded-md" />
            <View className="w-48 h-48 bg-neutral-20 rounded-md" />
            <View className="w-48 h-48 bg-neutral-40 rounded-md" />
            <View className="w-48 h-48 bg-neutral-60 rounded-md" />
            <View className="w-48 h-48 bg-neutral-80 rounded-md" />
          </View>
        </View>

        {/* Color Families */}
        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">Color Families</Text>
          <View className="flex-row flex-wrap gap-8">
            <View className="w-64 h-64 bg-red-60 rounded-lg" />
            <View className="w-64 h-64 bg-orange-60 rounded-lg" />
            <View className="w-64 h-64 bg-yellow-60 rounded-lg" />
            <View className="w-64 h-64 bg-green-60 rounded-lg" />
            <View className="w-64 h-64 bg-cyan-60 rounded-lg" />
            <View className="w-64 h-64 bg-blue-60 rounded-lg" />
            <View className="w-64 h-64 bg-indigo-60 rounded-lg" />
            <View className="w-64 h-64 bg-purple-60 rounded-lg" />
            <View className="w-64 h-64 bg-magenta-60 rounded-lg" />
          </View>
        </View>
      </View>

      {/* Spacing Showcase */}
      <View className="p-24 bg-neutral-100">
        <Text className="text-neutral-0 text-24 font-semibold mb-16">Spacing</Text>

        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">Gap Variations</Text>
          <View className="gap-4 mb-12">
            <View className="h-32 bg-blue-60 rounded-md" />
            <View className="h-32 bg-cyan-60 rounded-md" />
          </View>
          <View className="gap-12 mb-12">
            <View className="h-32 bg-blue-60 rounded-md" />
            <View className="h-32 bg-cyan-60 rounded-md" />
          </View>
          <View className="gap-24">
            <View className="h-32 bg-blue-60 rounded-md" />
            <View className="h-32 bg-cyan-60 rounded-md" />
          </View>
        </View>

        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">Padding Variations</Text>
          <View className="mb-12 bg-white-alpha-10 rounded-md">
            <View className="p-8 bg-purple-60 rounded-md">
              <Text className="text-neutral-0 text-12">p-8</Text>
            </View>
          </View>
          <View className="mb-12 bg-white-alpha-10 rounded-md">
            <View className="p-16 bg-purple-60 rounded-md">
              <Text className="text-neutral-0 text-12">p-16</Text>
            </View>
          </View>
          <View className="bg-white-alpha-10 rounded-md">
            <View className="p-24 bg-purple-60 rounded-md">
              <Text className="text-neutral-0 text-12">p-24</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Alpha Colors Showcase */}
      <View className="p-24">
        <Text className="text-neutral-0 text-24 font-semibold mb-16">Alpha Colors</Text>

        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">White Alpha</Text>
          <View className="bg-neutral-100 p-16 rounded-md">
            <View className="flex-row gap-8">
              <View className="w-48 h-48 bg-white-alpha-20 rounded-md" />
              <View className="w-48 h-48 bg-white-alpha-40 rounded-md" />
              <View className="w-48 h-48 bg-white-alpha-60 rounded-md" />
              <View className="w-48 h-48 bg-white-alpha-80 rounded-md" />
            </View>
          </View>
        </View>

        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">Black Alpha</Text>
          <View className="bg-neutral-0 p-16 rounded-md">
            <View className="flex-row gap-8">
              <View className="w-48 h-48 bg-black-alpha-20 rounded-md" />
              <View className="w-48 h-48 bg-black-alpha-40 rounded-md" />
              <View className="w-48 h-48 bg-black-alpha-60 rounded-md" />
              <View className="w-48 h-48 bg-black-alpha-80 rounded-md" />
            </View>
          </View>
        </View>
      </View>

      {/* Component Tokens */}
      <View className="p-24 bg-neutral-100">
        <Text className="text-neutral-0 text-24 font-semibold mb-16">Component Tokens</Text>

        {/* Avatar Colors */}
        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">Avatar Colors</Text>
          <View className="flex-row gap-8 mb-12">
            <View className="w-48 h-48 bg-avatar-group rounded-full" />
            <View className="w-48 h-48 bg-avatar-organization rounded-full" />
            <View className="w-48 h-48 bg-avatar-project rounded-full" />
            <View className="w-48 h-48 bg-avatar-user-1 rounded-full" />
            <View className="w-48 h-48 bg-avatar-user-5 rounded-full" />
          </View>
        </View>

        {/* Button Variants */}
        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">Button Variants</Text>
          <View className="gap-12">
            {/* Primary Button */}
            <View className="bg-button-primary-surface-default p-12 rounded-md border border-button-primary-border">
              <Text className="text-button-primary-text-default text-14 font-semibold text-center">
                Primary Button
              </Text>
            </View>

            {/* Secondary Button */}
            <View className="bg-button-secondary-surface-default p-12 rounded-md">
              <Text className="text-button-secondary-text-default text-14 font-semibold text-center">
                Secondary Button
              </Text>
            </View>

            {/* Critical Button */}
            <View className="bg-button-critical-surface-default p-12 rounded-md">
              <Text className="text-button-critical-text-default text-14 font-semibold text-center">
                Critical Button
              </Text>
            </View>

            {/* Outline Button */}
            <View className="bg-button-outline-surface-default p-12 rounded-md border border-button-outline-border-default">
              <Text className="text-button-outline-text-default text-14 font-semibold text-center">
                Outline Button
              </Text>
            </View>

            {/* Glass Button */}
            <View className="bg-button-glass-surface-selected p-12 rounded-md">
              <Text className="text-button-glass-text-default text-14 font-semibold text-center">
                Glass Button
              </Text>
            </View>
          </View>
        </View>

        {/* Banner Variants */}
        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">Banner Colors</Text>
          <View className="gap-8">
            <View className="bg-banner-info p-12 rounded-md">
              <Text className="text-neutral-0 text-12">Info Banner</Text>
            </View>
            <View className="bg-banner-success p-12 rounded-md">
              <Text className="text-neutral-0 text-12">Success Banner</Text>
            </View>
            <View className="bg-banner-warning p-12 rounded-md">
              <Text className="text-neutral-0 text-12">Warning Banner</Text>
            </View>
            <View className="bg-banner-critical p-12 rounded-md">
              <Text className="text-neutral-0 text-12">Critical Banner</Text>
            </View>
          </View>
        </View>

        {/* Input States */}
        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">Input States</Text>
          <View className="gap-12">
            <View className="bg-input-surface p-12 rounded-md border border-input-border">
              <Text className="text-neutral-40 text-14">Default Input</Text>
            </View>
            <View className="bg-input-surface-hovered p-12 rounded-md border border-input-border-hovered">
              <Text className="text-neutral-40 text-14">Hovered Input</Text>
            </View>
            <View className="bg-input-surface-selected p-12 rounded-md border border-input-border-focused bg-avatar-user-1 ">
              <Text className="text-neutral-0 text-14">Focused Input</Text>
            </View>
            <View className="bg-input-surface-disabled p-12 rounded-md border border-input-border-disabled">
              <Text className="text-neutral-60 text-14">Disabled Input</Text>
            </View>
          </View>
        </View>

        {/* Chips */}
        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">Chips</Text>
          <View className="flex-row gap-8">
            <View className="px-16 py-8 rounded-full border border-chips-border-default">
              <Text className="text-chips-text-default text-12">Default</Text>
            </View>
            <View className="px-16 py-8 rounded-full bg-chips-surface-selected">
              <Text className="text-chips-text-selected text-12">Selected</Text>
            </View>
            <View className="px-16 py-8 rounded-full border border-chips-border-disabled opacity-50">
              <Text className="text-chips-text-disabled text-12">Disabled</Text>
            </View>
          </View>
        </View>

        {/* Segmented Control */}
        <View className="mb-20">
          <Text className="text-neutral-20 text-12 mb-8">Segmented Control</Text>
          <View className="bg-segmented-control-background-mobile p-4 rounded-lg flex-row gap-4">
            <View className="flex-1 bg-segmented-control-foreground-selected p-10 rounded-md">
              <Text className="text-neutral-0 text-12 text-center font-semibold">Active</Text>
            </View>
            <View className="flex-1 p-10 rounded-md">
              <Text className="text-neutral-40 text-12 text-center">Inactive</Text>
            </View>
            <View className="flex-1 p-10 rounded-md">
              <Text className="text-neutral-40 text-12 text-center">Option</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Card Examples */}
      <View className="p-24">
        <Text className="text-neutral-0 text-24 font-semibold mb-16">Card Examples</Text>

        <View className="gap-16">
          {/* Card 1 */}
          <View className="bg-neutral-90 p-20 rounded-lg">
            <Text className="text-neutral-0 text-20 font-semibold mb-8">Card Title</Text>
            <Text className="text-neutral-40 text-16 mb-16">
              This card uses neutral-90 background with proper spacing tokens.
            </Text>
            <View className="flex-row gap-12">
              <View className="flex-1 bg-button-primary-surface-default p-12 rounded-md">
                <Text className="text-button-primary-text-default text-12 text-center font-semibold">Action</Text>
              </View>
              <View className="flex-1 bg-button-secondary-surface-default p-12 rounded-md">
                <Text className="text-button-secondary-text-default text-12 text-center font-semibold">Cancel</Text>
              </View>
            </View>
          </View>

          {/* Card 2 */}
          <View className="bg-gradient-to-r from-purple-60 to-magenta-60 p-20 rounded-lg">
            <Text className="text-neutral-0 text-20 font-semibold mb-8">Featured Card</Text>
            <Text className="text-white-alpha-90 text-16">
              Gradient background using purple and magenta tokens.
            </Text>
          </View>

          {/* Card 3 */}
          <View className="bg-special-bg-mobile p-20 rounded-lg border border-neutral-80">
            <Text className="text-neutral-0 text-20 font-semibold mb-8">Special Background</Text>
            <Text className="text-neutral-40 text-16">
              Using the special-bg-mobile token with subtle border.
            </Text>
          </View>
        </View>
      </View>

      {/* Bottom Spacing */}
      <View className="h-40" />
    </ScrollView>
  );
}
