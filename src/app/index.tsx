import { ScrollView, Text, View } from 'react-native';

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-neutral-90">
      {/* Header */}
      <View className="p-24 bg-special-bg-mobile">
        <Text className="text-neutral-0 text-32 font-bold mb-8">Design Tokens</Text>
        <Text className="text-neutral-40 text-16">Showcasing our design system</Text>
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

      {/* Card Examples */}
      <View className="p-24 bg-neutral-100">
        <Text className="text-neutral-0 text-24 font-semibold mb-16">Components</Text>

        <View className="gap-16">
          {/* Card 1 */}
          <View className="bg-neutral-90 p-20 rounded-lg">
            <Text className="text-neutral-0 text-20 font-semibold mb-8">Card Title</Text>
            <Text className="text-neutral-40 text-16 mb-16">
              This card uses neutral-90 background with proper spacing tokens.
            </Text>
            <View className="flex-row gap-12">
              <View className="flex-1 bg-blue-60 p-12 rounded-md">
                <Text className="text-neutral-0 text-12 text-center">Action</Text>
              </View>
              <View className="flex-1 bg-neutral-80 p-12 rounded-md">
                <Text className="text-neutral-0 text-12 text-center">Cancel</Text>
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
