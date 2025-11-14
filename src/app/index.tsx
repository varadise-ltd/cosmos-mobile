import Material from '@/components/shared/Material';
import Typography from '@/components/shared/Typography';
import { ScrollView, View } from 'react-native';

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-gray-900 p-6">
      <View className="gap-6">
        {/* Header */}
        <View className="mb-4">
          <Typography variant="title-lg-semi-bold" className="text-white mb-2">
            Material Component Demo
          </Typography>
          <Typography variant="text-md-regular" className="text-gray-300">
            iOS 18+ will show Liquid Glass effect
          </Typography>
          <Typography variant="text-md-regular" className="text-gray-300">
            Android & older iOS will show solid backgrounds
          </Typography>
        </View>

        {/* Example 1: Default Material with primary background */}
        <View>
          <Typography variant="text-sm-semi-bold" className="text-gray-300 mb-2">
            Primary Surface Material
          </Typography>
          <Material size="default" className="p-6 rounded-2xl bg-gray-800/50">
            <Typography variant="text-lg-semi-bold" className="text-white mb-2">
              Card Title
            </Typography>
            <Typography variant="text-md-regular" className="text-gray-200">
              This is a default Material component using the primary surface
              color. On iOS 18+, you&apos;ll see a beautiful Liquid Glass effect
              with blur and translucency.
            </Typography>
          </Material>
        </View>

        {/* Example 2: Material with custom background color */}
        <View>
          <Typography variant="text-sm-semi-bold" className="text-gray-300 mb-2">
            Custom Color Material
          </Typography>
          <Material size="default" className="p-6 rounded-2xl bg-purple-500/30">
            <Typography variant="text-lg-semi-bold" className="text-white mb-2">
              Purple Tinted Material
            </Typography>
            <Typography variant="text-md-regular" className="text-gray-100">
              Custom background colors serve as the tint for Liquid Glass on iOS
              18+. Notice the purple hue in the glass effect.
            </Typography>
          </Material>
        </View>

        {/* Example 3: Material with different tint */}
        <View>
          <Typography variant="text-sm-semi-bold" className="text-gray-300 mb-2">
            Cyan Tinted Material
          </Typography>
          <Material size="default" className="p-6 rounded-2xl bg-cyan-400/20">
            <Typography variant="text-lg-semi-bold" className="text-white mb-2">
              Cyan Glass Effect
            </Typography>
            <Typography variant="text-md-regular" className="text-gray-100">
              Different background colors create different glass tints. This one
              has a cyan tint on iOS 18+.
            </Typography>
          </Material>
        </View>

        {/* Example 4: Nested content in Material */}
        <View>
          <Typography variant="text-sm-semi-bold" className="text-gray-300 mb-2">
            Material with Rich Content
          </Typography>
          <Material size="default" className="p-6 rounded-2xl bg-gray-800/50">
            <View className="flex-row items-center mb-4">
              <View className="w-12 h-12 rounded-full bg-blue-500 mr-4" />
              <View className="flex-1">
                <Typography variant="text-lg-semi-bold" className="text-white">
                  User Profile
                </Typography>
                <Typography variant="text-sm-regular" className="text-gray-300">
                  @username
                </Typography>
              </View>
            </View>
            <Typography variant="text-md-regular" className="text-gray-200 mb-4">
              Material components work great with complex layouts. The glass
              effect on iOS 18+ enhances the visual hierarchy.
            </Typography>
            <View className="flex-row gap-2">
              <View className="px-4 py-2 bg-white/20 rounded-lg">
                <Typography variant="text-sm-medium" className="text-white">
                  Button 1
                </Typography>
              </View>
              <View className="px-4 py-2 bg-white/20 rounded-lg">
                <Typography variant="text-sm-medium" className="text-white">
                  Button 2
                </Typography>
              </View>
            </View>
          </Material>
        </View>

        {/* Example 5: Typography with Spans */}
        <View>
          <Typography variant="text-sm-semi-bold" className="text-gray-300 mb-2">
            Typography with Inline Spans
          </Typography>
          <Material size="default" className="p-6 rounded-2xl bg-gray-800/50">
            <Typography variant="text-md-regular" className="text-gray-200 mb-4">
              Regular text with{' '}
              <Typography.Span variant="title-xs-semi-bold" className="text-cyan-400">
                HUGE EMPHASIS
              </Typography.Span>{' '}
              and back to normal. Mix{' '}
              <Typography.Span variant="text-xs-regular" className="text-purple-300">
                tiny text
              </Typography.Span>{' '}
              with{' '}
              <Typography.Span variant="text-lg-semi-bold" className="text-yellow-400">
                LARGE BOLD
              </Typography.Span>{' '}
              inline!
            </Typography>
            <Typography variant="text-sm-regular" className="text-gray-200 mb-4">
              Price:{' '}
              <Typography.Span variant="title-md-semi-bold" className="text-green-400">
                $99.99
              </Typography.Span>
            </Typography>
            <Typography variant="text-md-regular" className="text-gray-200">
              Status:{' '}
              <Typography.Span variant="text-lg-semi-bold" className="text-red-400">
                SOLD OUT
              </Typography.Span>{' '}
              or{' '}
              <Typography.Span variant="text-lg-semi-bold" className="text-green-400">
                IN STOCK
              </Typography.Span>
            </Typography>
          </Material>
        </View>

        {/* Example 6: Stacked Materials */}
        <View>
          <Typography variant="text-sm-semi-bold" className="text-gray-300 mb-2">
            Stacked Materials
          </Typography>
          <Material size="default" className="p-6 rounded-2xl bg-gray-800/50">
            <Typography variant="text-lg-semi-bold" className="text-white mb-4">
              Outer Material
            </Typography>
            <Material size="default" className="p-4 rounded-xl bg-white/10">
              <Typography variant="text-md-semi-bold" className="text-white mb-2">
                Nested Material
              </Typography>
              <Typography variant="text-sm-regular" className="text-gray-200">
                On iOS 18+, nested materials create layered glass effects with
                depth and dimension.
              </Typography>
            </Material>
          </Material>
        </View>

        {/* Spacer for bottom padding */}
        <View className="h-8" />
      </View>
    </ScrollView>
  );
}
