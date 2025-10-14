import { Heading, Text } from "@nativeai/ui/content"
import { Button } from "@nativeai/ui/form"
import { Card, CardContent, CardFooter, Grid, GridItem } from "@nativeai/ui/surface"

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      {/* Intro */}
      <div className="text-center mb-8 max-w-2xl">
        <Heading level={1}>Welcome to NativeAI</Heading>
        <Text variant="large" className="mt-2 text-gray-600">
          Your local AI development environment is ready.  
          Get started by exploring the core packages below.
        </Text>
      </div>

      <Heading level={2} className="text-center mb-6">Next Steps</Heading>

      {/* Cards */}
      <Grid className="grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {/* Workspace */}
        <GridItem>
          <Card className="bg-white/70 backdrop-blur-sm h-full">
            <CardContent className="text-center">
              <Heading level={3}>Workspace</Heading>
              <Text variant="body" className="mt-2 text-gray-600">
                Set up your secure project workspace and structure.
              </Text>
            </CardContent>
            <CardFooter className="justify-center">
              <a
                href="https://github.com/ai-standards/native-ai/tree/main/packages/workspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>View on GitHub</Button>
              </a>
            </CardFooter>
          </Card>
        </GridItem>

        {/* UI */}
        <GridItem>
          <Card className="bg-white/70 backdrop-blur-sm h-full">
            <CardContent className="text-center">
              <Heading level={3}>UI</Heading>
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
                <Button>View on GitHub</Button>
              </a>
            </CardFooter>
          </Card>
        </GridItem>

        {/* AI */}
        <GridItem>
          <Card className="bg-white/70 backdrop-blur-sm h-full">
            <CardContent className="text-center">
              <Heading level={3}>AI</Heading>
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
                <Button>View on GitHub</Button>
              </a>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>

      {/* Footer */}
      <div className="mt-8 text-center max-w-2xl">
        <Text className="text-gray-500">
          Found an issue or want to contribute? Visit the{' '}
          <a
            href="https://github.com/ai-standards/native-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            NativeAI repository
          </a>{' '}
          to open issues, contribute code, or join the community.
        </Text>
      </div>
    </main>
  )
}
