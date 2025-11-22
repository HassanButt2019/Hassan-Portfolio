# OpenAI Migration Guide

## What Changed

The chatbot service has been successfully migrated from Google Gemini AI to OpenAI GPT-4o-mini.

### Files Modified:

1. **`services/geminiService.ts` → `services/openaiService.ts`**
   - Replaced Google GenAI with OpenAI SDK
   - Updated streaming implementation for OpenAI's chat completions API
   - Changed model from `gemini-2.5-flash` to `gpt-4o-mini`

2. **`components/Chatbot.tsx`**
   - Updated import to use the new `openaiService`

3. **`vite.config.ts`**
   - Changed environment variable from `GEMINI_API_KEY` to `OPENAI_API_KEY`

4. **`.env`**
   - Updated environment variable name

5. **`package.json`**
   - Removed `@google/genai` dependency
   - Added `openai` dependency

### New Environment Variable:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

## Setup Instructions

1. **Get an OpenAI API Key:**
   - Visit [OpenAI Platform](https://platform.openai.com/)
   - Create an account or log in
   - Go to API Keys section
   - Create a new API key

2. **Configure Environment:**
   - Copy `.env.example` to `.env`
   - Add your OpenAI API key to the `OPENAI_API_KEY` variable

3. **Run the Project:**
   ```bash
   npm run dev
   ```

## API Model Used

- **Model:** `gpt-4o-mini`
- **Max Tokens:** 500
- **Temperature:** 0.7
- **Streaming:** Enabled

## Security Note

⚠️ **Important:** The current implementation uses `dangerouslyAllowBrowser: true` for demo purposes. In a production environment, you should:

1. Move API calls to a backend server
2. Never expose API keys in client-side code
3. Implement proper authentication and rate limiting

## Features

- ✅ Streaming responses
- ✅ System instruction integration
- ✅ Error handling with graceful fallbacks
- ✅ Mock responses when API key is missing
- ✅ Professional context about Hassan's portfolio

The chatbot will now use OpenAI's GPT-4o-mini model to answer questions about Hassan's professional background, skills, and experience.
