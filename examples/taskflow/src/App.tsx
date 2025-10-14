import { Heading, Text } from "@nativeai/ui/content"
import { Button } from "@nativeai/ui/form"
import { Icon, IconRegistry } from "@nativeai/ui/media"
import { Card, CardContent, CardFooter, Grid, GridItem } from "@nativeai/ui/surface"

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[rgb(242,242,247)] p-8 text-gray-900 font-[system-ui]">
      {/* Intro */}
      <div className="max-w-2xl mb-8">
        <Heading level={1} align="center" className="font-semibold tracking-tight">
          Welcome to NativeAI
        </Heading>
        <Text variant="large" align="center" className="mt-2 text-gray-600 leading-relaxed">
          Your local AI development environment is ready. Start by editing src/App.tsx. These are some of the tools available to you.
        </Text>
      </div>

      {/* Cards */}
      <Grid className="grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
        {/* Workspace */}
        <GridItem>
          <Card className="bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-150 h-full flex flex-col justify-between">
            <CardContent className="text-center flex-1 flex flex-col justify-center">
              <Heading level={3} className="font-medium flex flex-row items-center gap-2">
                <Icon icon={IconRegistry.LuFolderTree} size={20} color="#666" />
                Workspace</Heading>
              <Text variant="body" className="mt-2 text-gray-600">
                Create a trusted workspace that gives AI secure filesystem access.
              </Text>
            </CardContent>
            <CardFooter className="justify-center">
              <a
                href="https://github.com/ai-standards/native-ai/tree/main/packages/workspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[rgb(0,122,255)] hover:bg-[rgb(10,132,255)] text-white font-medium rounded-md">
                  View on GitHub
                </Button>
              </a>
            </CardFooter>
          </Card>
        </GridItem>

        {/* UI */}
        <GridItem>
          <Card className="bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-150 h-full flex flex-col justify-between">
            <CardContent className="text-center flex-1 flex flex-col justify-center">
              <Heading level={3} className="font-medium flex flex-row items-center gap-2">
                <Icon icon={IconRegistry.LuLayoutTemplate} size={20} color="#666" />
                UI
              </Heading>
              <Text variant="body" className="mt-2 text-gray-600">
                Build beautiful interfaces with a native OS-style UI and 200+ components.
              </Text>
            </CardContent>
            <CardFooter className="justify-center">
              <a
                href="https://github.com/ai-standards/native-ai/tree/main/packages/ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[rgb(0,122,255)] hover:bg-[rgb(10,132,255)] text-white font-medium rounded-md">
                  View on GitHub
                </Button>
              </a>
            </CardFooter>
          </Card>
        </GridItem>

        {/* AI */}
        <GridItem>
          <Card className="bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-150 h-full flex flex-col justify-between">
            <CardContent className="text-center flex-1 flex flex-col justify-center">
              <Heading level={3} className="font-medium flex flex-row items-center gap-2">
                <Icon icon={IconRegistry.LuSparkles} size={20} color="#666" />
                AI
              </Heading>
              <Text variant="body" className="mt-2 text-gray-600">
                Connect to AI models and power your app with intelligence.
              </Text>
            </CardContent>
            <CardFooter className="justify-center">
              <a
                href="https://github.com/ai-standards/native-ai/tree/main/packages/ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[rgb(0,122,255)] hover:bg-[rgb(10,132,255)] text-white font-medium rounded-md">
                  View on GitHub
                </Button>
              </a>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>

      {/* Footer */}
      <div className="mt-8 text-center max-w-2xl text-gray-500 text-sm leading-relaxed">
        Found an issue or want to contribute? Visit the{' '}
        <a
          href="https://github.com/ai-standards/native-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(0,122,255)] hover:text-[rgb(10,132,255)] underline font-medium"
        >
          NativeAI repository
        </a>{' '}
        to open issues, contribute code, or join the community.
      </div>
    </main>
  )
}
