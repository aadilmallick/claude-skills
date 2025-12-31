---
name: github-info
description: 'Retrieve GitHub user profile and repository information using the gh CLI tool. Use when the user asks about their GitHub profile, statistics, repositories, or wants to view their GitHub information. Examples: Show me my GitHub profile, What are my top repositories, Get my GitHub stats.'
---

# GitHub Info

## Overview

Retrieve comprehensive GitHub information using the GitHub CLI (`gh`) tool. This skill provides scripts and commands to fetch user profile data, repository statistics, and other GitHub-related information.

## Prerequisites

- GitHub CLI (`gh`) must be installed and authenticated
- Run `gh auth login` if not already authenticated

## Quick Start

### Get Profile Information

Use the `gh_profile.sh` script to retrieve your GitHub profile:

```bash
bash scripts/gh_profile.sh
```

This displays:
- Username, name, and bio
- Company and location
- Email and blog
- Follower/following counts
- Public repository and gist counts
- Account creation and update dates

### Get Repository Information

Use the `gh_repos.sh` script to list your repositories:

```bash
# Get top 10 repositories (default)
bash scripts/gh_repos.sh

# Get top 20 repositories
bash scripts/gh_repos.sh --limit 20

# Sort by creation date
bash scripts/gh_repos.sh --sort created
```

This displays for each repository:
- Repository name and description
- Primary language
- Star and fork counts
- Private/public status
- Last update date

## Direct gh CLI Usage

For queries not covered by the scripts, use `gh` directly:

```bash
# Get specific user information
gh api user --jq '.login, .name, .bio'

# List repositories with custom fields
gh repo list --json name,stargazerCount --jq '.[] | "\(.name): \(.stargazerCount) stars"'

# Get total stars across all repos
gh api user/repos --paginate --jq '[.[] | .stargazers_count] | add'
```

## Advanced Usage

For additional `gh` CLI patterns and commands, see [references/gh_commands.md](references/gh_commands.md) which includes:
- Pull request and issue management
- GitHub Actions workflow queries
- Gist operations
- Advanced API queries with `jq` filters

## Resources

### scripts/

- `gh_profile.sh` - Get user profile information
- `gh_repos.sh` - Get repository information with sorting options

### references/

- `gh_commands.md` - Comprehensive reference of useful `gh` CLI commands and patterns
