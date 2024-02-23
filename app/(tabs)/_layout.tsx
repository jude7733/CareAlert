import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { Text } from 'tamagui'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Patients',
          tabBarIcon: ({ color }) => <Text>Monitor</Text>,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                <Text>options</Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Data',
          tabBarIcon: ({ color }) => <Text>Report</Text>,
        }}
      />
    </Tabs>
  )
}
